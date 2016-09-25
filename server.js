var dir = require('node-dir');
var fs = require('fs');

var dirname = 'D:/Media' 

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


function videoStats(filename) {
    return new Promise(function (resolve, reject) {
        if (!filename && !fs.statSync(filename).isFile()) {
            return reject('Invalid file name!');
        }
        var fileSizeInBytes = fs.statSync(filename)['size']
        fileSizeInBytes = ((fileSizeInBytes / 1024) / 1024)

        if (fileSizeInBytes < 50) {
            reject('Invalid file format')
        } else {
            // resolve(filename.slice(filename.lastIndexOf("/")+1, filename.length))
            resolve(filename.slice(filename.lastIndexOf("\\")+1, filename.length))
        }
    })
}

var movieData = []
movieNames(dirname).then(function (moviePaths) {
    moviePaths.forEach(function (path) {
        movieData.push(videoStats(path))
    }, function (error) {
        console.log(error)
    })

    Promise.all(movieData).then(function (names) {
    names.forEach(function (movie) {
        console.log(movie)
    }, function (error) {
        console.log(error)
    })
})
})


