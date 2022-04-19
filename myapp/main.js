const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const port = process.env.PORT || 4242

app.use(express.static(path.resolve('public')))

io.on('connection', (socket) => {
    console.log('a user connected')

    socket.on('connect', (element) => {
        console.log('connected',element)
    })

    socket.on('message', (message) => {
        socket.broadcast.emit('message', message)
    })

    socket.on('username', (username) => {
        socket.broadcast.emit('username', username)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
})

http.listen(port, () => {
    console.log('listening on port ', port)
})