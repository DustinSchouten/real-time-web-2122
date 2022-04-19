const express = require('express')
const app = express()
const http = require('http').createServer(app)
const path = require('path')
const io = require('socket.io')(http)
const port = process.env.PORT || 8000

app.use(express.static(path.resolve('public')))

io.on('connection', (socket) => {
    io.emit('connected')

    socket.on('message', (message) => {
        socket.broadcast.emit('message', message)
    })

    socket.on('username', (username) => {
        socket.broadcast.emit('username', username)
    })

    socket.on('disconnect', () => {
        io.emit('disconnected')
    })

    socket.on("typing", () => {
        socket.broadcast.emit("typing")
    })
})

http.listen(port, () => {
    console.log('listening on port ', port)
})