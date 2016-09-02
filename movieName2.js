var dir = require('node-dir');
var request = require('request');
var fs = require('fs');
var googleRequest = require('./googleRequest')
var videoFormat = require('./videoFormat')
var videoStat = require('./videoStat')
var omdb = require('./omdb')
var $ = require('jquery')

// var recursive = require('recursive-readdir');

var dirname = '/Users/radhikadesai/Documents/Movies'
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

var populateUI = function(){
    var movieDataDiv = $("#movie_data");
    movieData.forEach(function(movie){
        movieDataDiv.append('<div class="row"><div id="'+movie.filepath+'" class="col-md-1"><img src="'+movie.details.Poster+'" height="150" width="150"></div></div>');

    })
}

// get movie names from the specified directory
movieNames(dirname).then(function (moviePaths) {
    moviePaths.forEach(function (moviePath) {
        videoStat(moviePath).then(function (name) {
            return videoFormat(name).then(function (name) {
                var i = name.lastIndexOf('.');
                var movieName = name.slice(0, i).replace(/\(.+?\)/g, '').replace(/\[.+?\]/g, '').replace(/[^a-z0-9+]+/gi, ' ');
                var url = "https://www.google.com/search?q=" + 'imdb+' + "'" + movieName + "'"
                console.log("NAme is  : ",movieName);
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
                return (imdbObj)
            })
        }).then(function (imdbObj) {
            omdb(imdbObj.id).then(function (body) {
                movieData.push({"filepath": moviePath, "details": body});
                console.log("Movie data is : ",movieData);
                populateUI();
            })
        })
    })
})