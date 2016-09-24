var dir = require('node-dir');
var request = require('request');
var fs = require('fs');
var googleRequest = require('./googleRequest')
var videoFormat = require('./videoFormat')
var videoStat = require('./videoStat')
var movieDirectory = require('./movieDirectory')
var omdb = require('./omdb')
var movieResolve = require('./movieResolve')
// var recursive = require('recursive-readdir');

// var dirname = 'D:/Media's
// var movieData = []



// get movie names from the specified directory
// movieDirectory(dirname).then(function (moviePaths) {

//      moviePaths.forEach(function (moviePath) {
//         return movieResolve(moviePath).then(function (body) {
//             return body
//         })
//     }).then(function (body) {
//         console.log(body)
//         movieData.push(body)
//     }).then(function (movieData) {
//         console.log(movieData)
//     })

//     // Promise.all(movieData).then(function (movies) {
//     //     console.log(movies)
//     // })
// })



module.exports = function movieDump(dirname) {

    return new Promise(function (resolve, reject) {
        var movieData = []
        movieDirectory(dirname).then(function (moviePaths) {

            moviePaths.forEach(function (moviePath) {
                movieResolve(moviePath).then(function (body) {
                    movieData.push(body)

                    if(movieData.length === dirname.length){
                        resolve(movieData)
                    }
                })
            })

        })
    })

}