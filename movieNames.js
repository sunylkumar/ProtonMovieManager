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


global.movieLength

module.exports = function movieDump(dirname) {
        var movieData = []
        movieDirectory(dirname).then(function (moviePaths) {
            moviePaths.forEach(function (moviePath) {
            	var Movie = require('./app/models/movie.js')
            	Movie.findOne({'filepath':moviePath},function(err,result){
            		if(result)
            			console.log("Already exists");
            		else{
	            			movieResolve(moviePath).then(function (body) {
		                    movieData.push(body);
		                    if(movieData.length === dirname.length){
		                        return movieData
	            			}
	            		})
            		}
            	})
			})
        })
}
