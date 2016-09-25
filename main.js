const path = require('path')
const glob = require('glob')
const electron = require('electron')
const app = electron.app;
const ipc = require('electron').ipcMain;
var movieNames = require('./movieNames')
const dialog = require('electron').dialog

global.mongoose = require( 'mongoose' ); 
mongoose.connect('mongodb://localhost/movies');

const BrowserWindow = electron.BrowserWindow
var mainWindow = null;

var dirname

function initialize() {

  function createWindow() {
    var windowOptions = {
      width: 1080,
      minWidth: 680,
      height: 840,
      title: app.getName()
    }
    mainWindow = new BrowserWindow(windowOptions)
    if (!dirname) {
    mainWindow.loadURL(path.join('file://', __dirname, '/app/openDirectory.html'))
    } else {
    mainWindow.loadURL(path.join('file://', __dirname, '/app/movieDisplay.html'))
    }

    mainWindow.on('closed', function () {
      mainWindow = null
    })
  }

  app.on('ready', function () {
    createWindow()
    mongoose.connection.on('connected',function(){
      var movieNames = require('./movieNames.js')
      movieNames('/Users/radhikadesai/Documents/Movies');
    })
  })

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', function () {
    if (mainWindow === null) {
      createWindow()
    }

  })


}
initialize()

function movieDisplay(dirname) {
  movieNames(dirname).then(function (movieObjs) {
    console.log(movieObjs)
     mainWindow.loadURL(path.join('file://', __dirname, '/app/movieDisplay.html'))
  })
}


ipc.on('open-file-dialog', function (event) {
  dialog.showOpenDialog({
    properties: ['openFile', 'openDirectory']
  }, function (files) {
    if (files) {
      event.sender.send('selected-directory', files)
      dirname = files[0];
      movieDisplay(dirname)
    }
  })
})


// ipc.on('movies-processed', function (event, arg) {
//   movieObjs = '${arg}'
//   console.log(movieObjs)
//   event.sender.send('asynchronous-reply', 'pong')
// })

// initialize()