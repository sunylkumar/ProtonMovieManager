const ipc = require('electron').ipcRenderer

// const selectDirBtn = document.getElementById('movie-object')

// selectDirBtn.addEventListener('click', function (event) {
//   ipc.send('open-file-dialog')
// })

ipc.on('movie-objects', function (event, movieObjs) {
  document.getElementById('movie-object').innerHTML = "You selected: ${movieObjs}"
})

