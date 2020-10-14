const express = require('express')
const app = express()
const port = 3000

const generateMessage = require("./messageGenerator")

app.get('/hello-world', function(req, res) {
  generateMessage()
    .then(body => {
      const {text} = body;
      res.send(text);
     })
});

app.listen(port,function() {
  console.log(`Example app listening at http://localhost:${port}`)
});