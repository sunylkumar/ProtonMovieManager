var express = require('express');
var app = express();
var fs = require('fs');
var dir = require('node-dir');
var probe = require('node-ffprobe');
// var async = require('async');
var PORT = 3000;
process.env.PATH = './ffmpeg/bin'


var dirname = 'D:/Media';
var movies = [];

// dir.files('D:/Media', function (err, files) {
//      if (err) {
//         console.log(files);
//     } else {
//         files.forEach(function (file) {
//             probe(file, function (err, probeData) {
//                 if (err) {

//                 } else {
//                     movies.push(probeData)
//                 }
//             });
//         })
//     }
// });

dir.paths(dirname, function(err, paths) {
         if (err) {
        throw err;
    } else {
    console.log('files:\n',paths.files);
    console.log('subdirs:\n', paths.dirs);
        paths.files.forEach(function (file) {
            probe(file, function (err, probeData) {
                if (err) {
                    throw err;
                } else {
                    movies.push(probeData)
                    
                }
            });
        });
        
    }
})







app.listen(PORT, function () {
    console.log("listening on " + PORT);
}); 