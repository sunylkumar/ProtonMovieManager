module.exports = function (name) {
    return new Promise(function (resolve, reject) {
        if (!name) {
            return reject('Invalid file name!');
        }

        var formats = {
            amv: 1, avi: 1, flv: 1, m2v: 1, m4p: 1, m4v: 1, mkv: 1, mov: 1, mp2: 1,
            mp4: 1, mpe: 1, mpeg: 1, mpg: 1, mpv: 1, nsv: 1, qt: 1, rm: 1, rmvb: 1,
            svi: 1, vob: 1, wmv: 1, yuv: 1, webm: 1,
        }
        var i = name.lastIndexOf('.');
        var fileFormat = name.slice(i + 1)
        if (formats[fileFormat] === 1) {
            resolve(name)
        } else {
            reject('Invalid file format')
        }

    })
}