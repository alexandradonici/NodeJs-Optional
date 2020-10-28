const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const Furminator = require("./Furminator")
const hackNSA = require("./MrRobot")

const config = {
  secretKey: 'SuperSecretKey'
}

app.use(bodyParser.json())

const authorizationmiddleware = (req, res, next) => {
  const { authorization} = req.headers;

  if(!authorization){
    res.status(401)
    .send({status: "not ok"});
  }


  const jwtToken = authorization.replace("Bearer ", "");

  jwt.verify(authorization, config.secretKey, (err, decoded) =>
  {
    if(err) {
      res.status(401)
      .send({
        status: "not ok"
      });
    }
    else {
      next();
    }
  });
}

app.post('/graphql', authorizationmiddleware, (req, res) =>{
  res.send({
    status: 'ok'
  }
  )
});

app.post('/graphql/public', authorizationmiddleware, (req, res) =>{
  
  const {user, pass} = req.body;
  if(user === "Gogu" && pass === "Pa@r0lA")
  {
    jwt.sign({}),
    config.secretKey, (err, token) => {
      res.send({
        token,
      });
    }
  }
});

 app.listen(port,function() {
   console.log(`Example app listening at http://localhost:${port}`)
 });