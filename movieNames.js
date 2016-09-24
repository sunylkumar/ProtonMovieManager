var dir = require('node-dir');
var request = require('request');
var fs = require('fs');
var googleRequest = require('./googleRequest')
var videoFormat = require('./videoFormat')
var videoStat = require('./videoStat')
var movieDirectory = require('./movieDirectory')
var omdb = require('./omdb')
var movieResolve = require('./movieResolve')
var movies = require('./movieDump')


module.exports = function movieNames(dirname) {
    return new Promise(function (resolve, reject) {
        movies(dirname).then(function (names) {
            resolve(names)
        })
    })

}
