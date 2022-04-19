let socket = io()
let input = document.querySelector('input')

const username = prompt("Please enter a username: ", "");
document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault()
    if (username) {
        socket.emit('username', username)
        addUsername(username)
    }
})

let messages = document.querySelector('section ul')

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  if (input.value) {
      console.log(input)
    socket.emit('message', input.value)
    addMessage(input.value)
    input.value = ''
  }
})

function addMessage(message) {
    messages.appendChild(Object.assign(document.createElement('li'), { textContent: message }))
    messages.scrollTop = messages.scrollHeight
}

function addUsername(username) {
    var element = document.createElement('li');
    element.classList.add('username');
    messages.appendChild(Object.assign(element, { textContent: username }))
    messages.scrollTop = messages.scrollHeight
}

socket.on('message', message => {
    addMessage(message)
})

socket.on('username', username => {
    addUsername(username)
})