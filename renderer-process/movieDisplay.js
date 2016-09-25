const ipc = require('electron').ipcRenderer

// const asyncMsgBtn = document.getElementById('movie-display')

// // asyncMsgBtn.addEventListener('click', function () {
// //   ipc.send('movie-display-message', 'ping')
// // })

// ipc.on('movie-display-reply', function (event, arg) {
//   const message = `Asynchronous message reply: ${arg}`
//   document.getElementById('movie-displayed').innerHTML = message
// })


ipc.on('ping', (event, message) => {
  console.log(message)  // Prints 'whoooooooh!'
  document.getElementById('movie-displayed').innerHTML = message
})
