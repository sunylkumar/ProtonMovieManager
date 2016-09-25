var dir = require('node-dir');
var fs = require('fs');

module.exports = function movieNames(dirname) {
    return new Promise(function (resolve, reject) {
        dir.files(dirname, function (err, files) {
            if (err) {
                reject(err)
            } else {
                movieLength = files.length
                resolve(files)
            }
        })
    })
}




// var dirname = 'D:/Media'
// var lists = []

// function* movieNames(dirname) {
//      lists = yeild dir.files(dirname, function (err, files) {
//         if (err) {
//             console.log(err)
//         } else {
//              return files
//         }
//     })
// }

