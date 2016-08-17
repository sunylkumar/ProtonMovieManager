var dir = require('node-dir');
var probe = require('node-ffprobe');
var request = require('request');
// process.env.PATH = './ffmpeg/bin'

// var recursive = require('recursive-readdir');

var dirname = '/Users/radhikadesai/Documents/Screenshots';
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
                resolve(probeData);
        })
    })
}
//get movie names from the specified directory
movieNames(dirname).then(function (moviepaths) {
    moviepaths.forEach(function (moviepath) { 
        movieData.push(movieMetadata(moviepath)); //push a promise into the moviedata array
    }, function(error){
        console.log(error);
    })
    //process array of promises to get the movies array
    Promise.all(movieData).then(function (movies) {
        movies.forEach(function(movie){ 
            //Request TMDB for movie info
            request("https://api.themoviedb.org/3/search/movie?query="+movie+"&api_key=5b0505d97be0c721bce417a10e58113e", function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log('\n'+body); // Print the body of request.
              }
            });
        })
    }, function(error){
        console.log(error);
    })
})


