const path = require('path')
const glob = require('glob')
const electron = require('electron')
const app = electron.app;
const ipc = require('electron').ipcMain;

global.mongoose = require( 'mongoose' ); 
mongoose.connect('mongodb://localhost/movies');

const BrowserWindow = electron.BrowserWindow
var mainWindow = null;

function initialize() {

  function createWindow() {
    var windowOptions = {
      width: 1080,
      minWidth: 680,
      height: 840,
      title: app.getName()
    }
    mainWindow = new BrowserWindow(windowOptions)
    mainWindow.loadURL(path.join('file://', __dirname, '/index.html'))

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

