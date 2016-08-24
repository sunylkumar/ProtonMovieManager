var dir = require('node-dir');
var request = require('request');
var fs = require('fs');
var googleRequest = require('./googleRequest')
var videoFormat = require('./videoFormat')
var videoStat = require('./videoStat')
var omdb = require('./omdb')

// var recursive = require('recursive-readdir');

var dirname = 'D:/Media'
var movieData = []

function movieNames(dirname) {
    return new Promise(function (resolve, reject) {
        dir.files(dirname, function (err, files) {
            if (err) {
                reject(err)
            } else {
                resolve(files)
            }
        })
    })
}

// get movie names from the specified directory
movieNames(dirname).then(function (moviePaths) {
    moviePaths.forEach(function (moviePath) {
        videoStat(moviePath).then(function (name) {
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
                console.log(Object.keys(movieList[0])[0])
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
            omdb(imdbObj.id).then(function (body) {
                console.log(body)
            })
        })
        // .catch(function (error) {
        //     console.log(error);
        // })
    })
})