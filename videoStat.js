var fs = require('fs');

module.exports = function (filename) {
    return new Promise(function (resolve, reject) {
        if (!filename && !fs.statSync(filename).isFile()) {
            movieLength-=1
            return reject('Invalid file name!');
        }
        var fileSizeInBytes = fs.statSync(filename)['size']
        fileSizeInBytes = ((fileSizeInBytes / 1024) / 1024)

        if (fileSizeInBytes < 50) {
            movieLength-=1
            reject('Invalid file format')
        } else {
            // resolve(filename.slice(filename.lastIndexOf("/")+1, filename.length))
            resolve(filename.slice(filename.lastIndexOf("\\")+1, filename.length))
        }
    })
}
