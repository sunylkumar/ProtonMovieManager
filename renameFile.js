var fs = require('fs');

module.exports = function (moviePath, imdbName) {
    return new Promise(function (resolve, reject) {
        console.log(moviePath)
        if (!moviePath && !fs.statSync(moviePath).isFile()) {
            reject('Invalid file name!');
        }
        var i = moviePath.lastIndexOf('.')
        var fileFormat = moviePath.slice(i)
        console.log('fileFormat', fileFormat)

        var dirPath = moviePath.slice(0, moviePath.lastIndexOf("\\")+1)
        console.log('dirPath',dirPath)
        
        var newMoviePath = dirPath+imdbName+fileFormat
        console.log('newMoviePath', newMoviePath)
        

        fs.rename(moviePath, newMoviePath, function (error) {
            if(error){
                reject(error)
            } 
            else{
                console.log('Renamed', newMoviePath)
                // Update Path in DB after this Call
            }
        })
    })
}



//  return renameFile(moviePath, 'warcraft').then(function (error) {
//             console.log(error)
//         })