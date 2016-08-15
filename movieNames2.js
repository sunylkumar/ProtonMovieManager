var dir = require('node-dir');
var probe = require('node-ffprobe');
process.env.PATH = './ffmpeg/bin'

// var recursive = require('recursive-readdir');

var dirname = 'D:/Media';
var movieData = [];

function movieNames(dirname) {
    return new Promise(function (resolve, reject) {
        dir.files(dirname, function (err, files) {
            if (err) {
                return reject(err)
            } else {
                return resolve(files)
            }
        })
    })
}


function movieMetadata(path) {
    return new Promise(function (resolve, reject) {
        probe(path, function (err, probeData) {
            if (err) {
                return reject(err)
            } else {
                return resolve(probeData);
            }
        })
    })
}


function movieLog(paths, movieData) {
    return new Promise(function (resolve, reject) {
        paths.forEach(function (path) {
            movieData.push(movieMetadata(path))
            console.log(movieData.length);
        })
        // if (err) {
        //     return reject(err)
        // } else {
            console.log('Return Movies');
            return resolve(movieData)
        // }
    })
}

movieNames(dirname).then(function (moviepaths) {
    movieLog(moviepaths, movieData).then(function (movies) {
        console.log('Movies :')
        console.log(movies)
    }, function (error) {
        console.log('Movies Error :', error)
    })
}, function (error) {
    console.log(error)
})