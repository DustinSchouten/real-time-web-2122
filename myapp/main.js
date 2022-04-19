require("dotenv").config();
const express = require("express");

const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)

app.set('view engine', 'ejs');

app.use(express.static(path.resolve('public')))

app.get('/', function (req, res) {
    res.render('index')
})


io.on('connection', (socket) => {
    console.log('a user connected');
});

const port = process.env.PORT || 8000;

http.listen(port, function(){
    console.log("Server listening on port", port);
})