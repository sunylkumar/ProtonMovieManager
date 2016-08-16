var dir = require('node-dir')
var probe = require('node-ffprobe')
process.env.PATH = './ffmpeg/bin';

// var recursive = require('recursive-readdir');

var dirname = 'D:/Media';
var movieData = [];
var promiseArray = [];


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


// function movieMetadata(path) {
//     return new Promise(function (resolve, reject) {
//         probe(path, function (err, probeData) {
//             if (err) {
//                 reject(err)
//             } else {
//                 console.log('Probe: ', probeData.filename)
//                 resolve(probeData)
//             }
//         })
//     })
// }


// function movieLog(paths) {
//     return new Promise(function (resolve, reject) {
//         paths.forEach(function (path) {
//             movieMetadata(path).then(function (probeData) {
//                 movieData.push(probeData)
//                 console.log(movieData.length);
//             })
//         })
//         // if (err) {
//         //     return reject(err)
//         // } else {
//         console.log('Return Movies');
//         return resolve(movieData)
//         // }
//     })
// }



movieNames(dirname).then(function (moviepaths) {
    moviepaths.forEach(function (moviepath) {
        console.log(moviepath)
        promiseArray.push(movieMetadata(path))
        // console.log(promises.length)
    // })

    // Promise.all(promiseArray).then(function (movies) {
    //     movies.foreach(function (movie) {
    //         console.log(movie.filename)
    //     })
    }, function (error) {
        console.log(error)
    })


    // movieLog(moviepaths).then(function (movies) {
    //     console.log('Movies :')
    //     console.log(movies)
    // }, function (error) {
    //     console.log('Movies Error :', error)
    // })
}, function (error) {
    console.log(error)
})