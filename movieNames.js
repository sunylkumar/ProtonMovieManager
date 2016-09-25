var dir = require('node-dir');
var request = require('request');
var fs = require('fs');
var googleRequest = require('./googleRequest')
var videoFormat = require('./videoFormat')
var videoStat = require('./videoStat')
var movieDirectory = require('./movieDirectory')
var omdb = require('./omdb')
var movieResolve = require('./movieResolve')
var movieDump = require('./movieDump')
const ipc = require('electron').ipcRenderer

global.movieLength

// var dirname = 'D:/Media'
module.exports = function movieNames(dirname) {
    return new Promise(function (resolve, reject) {
        movieDump(dirname).then(function (movieObj) {
            // console.log(movieObj)
           resolve(movieObj)
        })
    })
}

// module.exports = function movieNames(dirname) {
//     movieDump(dirname).then(function (movieObj) {
//         // console.log(movieObj)
//         ipc.send('movies-processed', movieObj)
//     })
// }