var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Welcome to Grassdoorlogitech");
});

app.listen(3000);
