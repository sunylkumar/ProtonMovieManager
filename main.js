const path = require('path')
const glob = require('glob')
const electron = require('electron')
const app = electron.app;
const ipc = require('electron').ipcMain;

const BrowserWindow = electron.BrowserWindow
var mainWindow = null;


var movieNames = require('./movieNames')

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

