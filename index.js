var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.get('/',function(req,res) {
  //nothing yet
})

app.listen(3000, function(){
  console.log("listening on port 3000")
})
