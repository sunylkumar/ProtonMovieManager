var fs = require('fs');


var path = 'D:/med/Ice.Age.The.Great.Egg-Scapade.2016.HDRip.XviD.AC3-EVO/Ice.Age.The.Great.Egg-Scapade.2016.HDRip.XviD.AC3-EVO.avi'


function getFilesizeInBytes(filename) {
    var stats = fs.statSync(filename)
    var fileSizeInBytes = stats["size"]

    fileSizeInBytes = (fileSizeInBytes / 1024) / 1024
    console.log(fileSizeInBytes)

    console.log(fs.statSync(path).isFile())
}

getFilesizeInBytes(path)
