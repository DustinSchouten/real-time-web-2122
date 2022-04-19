let socket = io()
let input = document.querySelector('input')

const username = prompt("Please enter a username: ", "");
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
    if (username) {
        socket.emit('username', username)
    }
})

let messages = document.querySelector('section ul')

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  if (input.value) {
    socket.emit('message', input.value)
    input.value = ''
  }
})

socket.on('message', message => {
    messages.appendChild(Object.assign(document.createElement('li'), { textContent: message }))
    messages.scrollTop = messages.scrollHeight
})

socket.on('username', username => {
    var element = document.createElement('li');
    element.classList.add('username');
    messages.appendChild(Object.assign(element, { textContent: username }))
    messages.scrollTop = messages.scrollHeight
})