require("dotenv").config();

const express = require("express");

var app = express()

app.get('/', function (req, res) {
    res.send('hello world')
})

const port = process.env.PORT || 8000;

app.listen(port, function(){
    console.log("Server listening on port", port);
})