const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const models = require('./models')

const Furminator = require("./Furminator")
const hackNSA = require("./MrRobot")

const config = {
  secretKey: 'SuperSecretKey'
}

app.use(bodyParser.json())

const authorizationmiddleware = (req, res, next) => {
  const {authorization} = req.headers;

  if(!authorization){
    res.status(401)
    .send({status: 'not ok1'});
  }

  const jwtToken = authorization.replace('Bearer ', '');

  jwt.verify(jwtToken, config.secretKey, (err, decoded) =>
  {
    if(err) {
      res.status(401)
      .send({
        status: 'not ok2'
      });
    }
    else {
      next();
    }
  });
}

app.post('/graphql', authorizationmiddleware, (req, res) =>{
  res.status(200).send({
    status: 'ok'
  }
  )
});

app.post('/graphql/public', authorizationmiddleware, (req, res) =>{
  
  const {user, pass} = req.body;
  if(user === "Gogu" && pass === "P@r0lA")
  {
    jwt.sign({}),
    config.secretKey, (err, token) => {
      res.send({
        token,
      });
    }
  }
  else
  {
    res.status(401).send({
      status: 'not ok3'
    })
  }
});


app.get('/users/:userId', async function(req, res){
  const userId = req.params.userId;
  const user = await models.User.findByPk(userId);

  console.log('user', user);

  res.send({
   firstName: user.firstName,
   lastName: user.lastName,
   email: user.email
  });

})

app.post('/categories/:categoryId/product', async function(req, res) {
  const categoryId = req.params.categoryId;
  const category = await models.Category.findByPk(categoryId);
  const product = await category.createProduct({
    Name: 'Name',
    Description: 'Description',
    Price: 10
  });
  
  res.send({
    status: 'ok',
  });
});

app.post('/user/:userId/product/:productId/associate', async (req, res) => {
  const { userId, productId } = req.params;
  const user = await models.User.findByPk(userId);
  const product = await models.Product.findByPk(productId);
  await user.addProduct(product);
  res.send({
    status: 'ok',
  });
});
 app.listen(port,function() {
   console.log(`Example app listening at http://localhost:${port}`)
 });

