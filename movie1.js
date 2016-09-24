// var fs = require('fs');




var dir = require('node-dir');
var request = require('request');
var fs = require('fs');
var googleRequest = require('./googleRequest')
var videoFormat = require('./videoFormat')
var videoStat = require('./videoStat')
var omdb = require('./omdb')
var renameFile = require('./renameFile')
// var renameMovie = require('./renameMovie')

// var recursive = require('recursive-readdir');

var dirname = 'D:/Med'
var movieData = []


console.log('Code Start!')


dir.files(dirname, function (err, files) {
  console.log('Dir files!')
  if (err) {
    console.log(err)
  } else {
    console.log(files)
  }
})



console.log('Code End!')























// var path = 'D:/med/Ice.Age.The.Great.Egg-Scapade.2016.HDRip.XviD.AC3-EVO/Ice.Age.The.Great.Egg-Scapade.2016.HDRip.XviD.AC3-EVO.avi'


// function getFilesizeInBytes(filename) {
//     var stats = fs.statSync(filename)
//     var fileSizeInBytes = stats["size"]

//     fileSizeInBytes = (fileSizeInBytes / 1024) / 1024
//     console.log(fileSizeInBytes)

//     console.log(fs.statSync(path).isFile())
// }

// getFilesizeInBytes(path)


{ Title: 'Warcraft: The Beginning',
  Year: '2016',
  Rated: 'PG-13',
  Released: '10 Jun 2016',
  Runtime: '123 min',
  Genre: 'Action, Adventure, Fantasy',
  Director: 'Duncan Jones',
  Writer: 'Charles Leavitt (screenplay), Duncan Jones (screenplay)',
  Actors: 'Travis Fimmel, Paula Patton, Ben Foster, Dominic Cooper',
  Plot: 'As an Orc horde invades the planet Azeroth using a magic portal, a few human heroes and dissenting Orcs must attempt to stop the true evil behind this war.',
  Language: 'English',
  Country: 'China, Canada, Japan, USA',
  Awards: 'N/A',
  Poster: 'http://ia.media-imdb.com/images/M/MV5BMjIwNTM0Mzc5MV5BMl5BanBnXkFtZTgwMDk5NDU1ODE@._V1_SX300.jpg',
  Metascore: '32',
  imdbRating: '7.2',
  imdbVotes: '122,100',
  imdbID: 'tt0803096',
  Type: 'movie',
  Response: 'True' }


