var dir = require('node-dir');
var probe = require('node-ffprobe');
var request = require('request');
process.env.PATH = './ffmpeg/bin'
var fs = require('fs');


// var recursive = require('recursive-readdir');

var dirname = 'D:/med'
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
movieNames(dirname).then(function (moviepaths) {
    moviepaths.forEach(function (moviepath) {
         // movieData.push(movieMetadata(moviepath)); //push a promise into the moviedata array
        console.log(moviepath.slice(moviepath.lastIndexOf("\\")+1, moviepath.length))
        // console.log(moviepath)
    }, function (error) {
        console.log(error);
    })

    //process array of promises to get the movies array
    Promise.all(movieData).then(function (movies) {
        movies.forEach(function (movie) {
            console.log(movie)
        }, function (error) {
            console.log(error);
        })
    })

})


// var path = 'D:/med/Ice.Age.The.Great.Egg-Scapade.2016.HDRip.XviD.AC3-EVO/Ice.Age.The.Great.Egg-Scapade.2016.HDRip.XviD.AC3-EVO.avi'


// function getFilesizeInBytes(filename) {
//     var stats = fs.statSync(filename)
//     var fileSizeInBytes = stats["size"]

//     fileSizeInBytes = (fileSizeInBytes / 1024) / 1024
//     console.log(fileSizeInBytes)

//     console.log(fs.statSync(path).isFile())
// }

// getFilesizeInBytes(path)


// var recur = function (dir) {
//     fs.readdir(dir, function (err, list) {
//         list.forEach(function (file) {
//             var file2 = path.resolve(dir, file);
//             fs.stat(file2, function (err, stats) {
//                 if (stats.isDirectory()) {
//                     recur(file2);
//                 }
//                 else {
//                     console.log(file2);
//                 }
//             })
//         console.log(file)
//         })

//     });
// };
// recur(dirname)