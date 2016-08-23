var dir = require('node-dir');
var probe = require('node-ffprobe');
var request = require('request');
process.env.PATH = './ffmpeg/bin'
var fs = require('fs');
var googleRequest = require('./googleRequest')
var videoFormat = require('./videoFormat')
var videoStat = require('./videoStat')

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


function movieMetadata(path) {
    return new Promise(function (resolve, reject) {
        probe(path, function (err, probeData) {
            resolve(probeData);
        })
    })
}
// get movie names from the specified directory
// movieNames(dirname).then(function (moviepaths) {
//     moviepaths.forEach(function (moviepath) {
//         movieData.push(movieMetadata(moviepath)); //push a promise into the moviedata array
//     }, function (error) {
//         console.log(error);
//     })

//     //process array of promises to get the movies array
//     Promise.all(movieData).then(function (movies) {
//         movies.forEach(function (movie) {
//             console.log(movie)
//         }, function (error) {
//             console.log(error);
//         })
//     })

// })


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
            googleRequest(url).then(function (movieList) {
                console.log(movieList)
            }, function (error) {
                console.log(error)
            })
        })
        .catch(function (error) {
            console.log(error);
        })
    })
})