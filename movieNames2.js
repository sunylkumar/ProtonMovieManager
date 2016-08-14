var dir = require('node-dir');
var probe = require('node-ffprobe');
process.env.PATH = './ffmpeg/bin'

// var recursive = require('recursive-readdir');


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
        movies = [];
        probe(path, function (err, probeData) {
            if (err) {
                reject(err)
            } else {
                resolve(probeData);
            }
        })
    })
}

var movies = []
movieNames('D:/Media').then(function (moviepaths) {
    moviepaths.forEach(function (moviepath) {
        movieMetadata(moviepath).then(function (movie) {
         //console.log(movie)
        movies.push(movie)
        // movies = movie
    }, function (error) {
        console.log(error)
    })
    })
}, function (error) {
    console.log(error)
}).then(function () {
    console.log(movies)
})