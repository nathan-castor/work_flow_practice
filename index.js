var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.listener(3000, function(){
  console.log("listening on port 3000")
})
