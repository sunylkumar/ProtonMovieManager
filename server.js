var movieNames = require('./movieNames')

var dirname = 'D:/Med'
movieNames(dirname).then(function (names) {
    console.log(names)
}).catch(function (error) {
    console.log(error)
})