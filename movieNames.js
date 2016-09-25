var dir = require('node-dir');
var request = require('request');
var fs = require('fs');
var googleRequest = require('./googleRequest')
var videoFormat = require('./videoFormat')
var videoStat = require('./videoStat')
var movieDirectory = require('./movieDirectory')
var omdb = require('./omdb')
var movieResolve = require('./movieResolve')
const ipc = require('electron').ipcRenderer
var Movie = require('./app/models/movie')


global.movieLength

module.exports = function movieDump(dirname) {
    return new Promise(function (resolve, reject) {

        var movieData = []
        movieDirectory(dirname).then(function (moviePaths) {
            moviePaths.forEach(function (moviePath) {

				movieResolve(moviePath).then(function (body) {
					movieData.push(body);
					if (movieData.length === movieLength) {
						console.log(movieData)
						resolve(movieData)
					}
				})
			})
        })
    })
}
