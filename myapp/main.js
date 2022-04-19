require("dotenv").config();

const express = require("express");

var app = express()
app.set('view engine', 'ejs');

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('index')
})

const port = process.env.PORT || 8000;

app.listen(port, function(){
    console.log("Server listening on port", port);
})