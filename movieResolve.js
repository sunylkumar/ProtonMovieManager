var dir = require('node-dir');
var request = require('request');
var fs = require('fs');
var googleRequest = require('./googleRequest')
var videoFormat = require('./videoFormat')
var videoStat = require('./videoStat')
var movieDirectory = require('./movieDirectory')
var omdb = require('./omdb')

// var recursive = require('recursive-readdir');


module.exports = function movieResolve(moviePath) {
    return videoStat(moviePath).then(function (name) {
        return (name)
    }).then(function (name) {
        return videoFormat(name).then(function (name) {
            var i = name.lastIndexOf('.');
            var movieName = name.slice(0, i).replace(/\(.+?\)/g, '').replace(/\[.+?\]/g, '').replace(/[^a-z0-9+]+/gi, ' ');
            var url = "https://www.google.com/search?q=" + 'imdb+' + "'" + movieName + "'"
            // console.log(url)
            return (url)
        })
    }).then(function (url) {
        return googleRequest(url).then(function (movieList) {
            // console.log(Object.keys(movieList[0])[0])
            var imdbId = Object.keys(movieList[0])[0]
            var imdbName = movieList[0][imdbId]
            var imdbObj = {
                id: imdbId,
                name: imdbName
            }
            // console.log(Object.keys(movieList[0]).length)
            return (imdbObj)
        })
    }).then(function (imdbObj) {
           return omdb(imdbObj.id).then(function (body) {
            //code to add to object and add it to DB
            return (body)
        })
    }).then(function (body) {
        return body
    })
}

