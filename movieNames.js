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
            if (err) {
                reject(err)
            } else {
                resolve(probeData);
            }
        })
    })
}

movieNames(dirname).then(function (moviepaths) {
    moviepaths.forEach(function (moviepath) {
        movieData.push(movieMetadata(moviepath))
    }, function (error) {
        console.log(error)
    })

    Promise.all(movieData).then(function (movies) {
        console.log('Total movies are : ', movies.length)
        console.log(movies)
    }, function (error) {
        console.log(error)
    })
})
