// dir.paths(dirname, function (err, paths) {
//     if (err) {
//         throw err;
//     } else {
//         console.log('files:\n', paths.files);
//     }
// })


function moviePromise(data){
    return new Promise(
        function(resolve, reject){
            resolve('Everything worked.')
        //  reject()
        });
}

moviePromise('some data').then(function (data){
    console.log(data)
})