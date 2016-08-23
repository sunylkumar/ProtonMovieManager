var dir = require('node-dir')
var probe = require('node-ffprobe')
var request = require('request');

// process.env.PATH = './ffmpeg/bin';

// // var recursive = require('recursive-readdir');

var movie = {
    id: String,
    title: String
}

var movieList = []

var name = 'The.Revenant.2015.720p.BluRay.x264-[YTS.AG].mp4';
var i = name.lastIndexOf('.');
var newName = name.slice(0, i);
newName = newName.replace(/\(.+?\)/g, '');
newName = newName.replace(/\[.+?\]/g, '');
newName = newName.replace(/[^a-z0-9+]+/gi, '+');
// var url = "https://www.google.com/search?q=" + 'imdb+' + "'" + newName + "'"
var url = "https://www.google.com/search?q=" + 'imdb+' + newName
console.log(url)

request({ url: url },
    function (error, response, body) {
        if (error) {
            console.log('Unable to fetch location');
        } else {
            var x = 0, y = 0;
            var i = 0;

            while (x >= 0 && y >= 0) {
                console.log('Loop: ', i++);
                x = body.indexOf('<a href="/url?q=http://www.imdb.com/title/')
                y = body.indexOf('<\/a>', x) + 4
                if (x>0 && y>0) {
                    lists = body.slice(x, y)
                    movie.id = lists.slice(42, 51)
                    movie.title = lists.replace(/\<.+?\>/g, '').slice(0, -7)
                    // console.log(movie)
                    body = body.slice(y, body.length)
                    movieList.push(movie)
                }
            }
            console.log(movieList)
        }
    });    
