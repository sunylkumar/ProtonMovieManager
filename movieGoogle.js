var dir = require('node-dir')
var probe = require('node-ffprobe')
var request = require('request');
var googleRequest = require('./googleRequest')
var videoFormat = require('./videoFormat')
var videoStat = require('./videoStat')

// var name = 'hello.avi';
// var i = name.lastIndexOf('.');
// var fileFormat = name.slice(i+1)
// // console.log(fileFormat)
// var movieName = name.slice(0, i).replace(/\(.+?\)/g, '').replace(/\[.+?\]/g, '').replace(/[^a-z0-9+]+/gi, ' ');
// var url = "https://www.google.com/search?q=" + 'imdb+' + "'" + movieName + "'"
// // var url = "https://www.google.com/search?q=" + 'imdb+' + movieName
// // console.log(url)



// googleRequest(url).then(function (movieList) {
//     console.log(movieList)
// }, function (error) {
//     console.log(error)
// })



moviePaths.forEach(function (moviePath) {
    videoStat(moviePath).then(function (name) {
        return (name)
    }).then(function (name) {
        return videoFormat(name).then(function (name) {
            var i = name.lastIndexOf('.');
            var movieName = name.slice(0, i).replace(/\(.+?\)/g, '').replace(/\[.+?\]/g, '').replace(/[^a-z0-9+]+/gi, ' ');
            var url = "https://www.google.com/search?q=" + 'imdb+' + "'" + movieName + "'"
            return (url)
        })
    }).then(function (url) {
        googleRequest(url).then(function (movieList) {
            console.log(movieList)
        }, function (error) {
            console.log(error)
        })
    })

})


// names.forEach(function (name) {
//     videoFormat(name).then(function (name) {
//         var i = name.lastIndexOf('.');
//         var movieName = name.slice(0, i).replace(/\(.+?\)/g, '').replace(/\[.+?\]/g, '').replace(/[^a-z0-9+]+/gi, ' ');
//         var url = "https://www.google.com/search?q=" + 'imdb+' + "'" + movieName + "'"
//         // console.log(url)
//         return (url)
//     }).then(function (url) {
//         googleRequest(url).then(function (movieList) {
//             console.log(movieList)
//         }, function (error) {
//             console.log(error)
//         })
//     })
// })

