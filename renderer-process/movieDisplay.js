const ipc = require('electron').ipcRenderer
var $ = require('jquery')

var populateUI = function (movies) {
    var movieDataDiv = $("#movie-object");
    // movies.forEach(function(movie){
    //     // <img src="'+movie.details.Poster+'" height="150" width="150">
    //     movieDataDiv.append('<div id="'+movie.filepath+'" class="col-md-2"><div class="card card-block"><img class="card-img-top" src="'+movie.details.Poster+'" ><h4 class="card-text text-center">'+movie.details.Title+'</h4></div></div>');

    // })
    console.log("in pop")
    movies.forEach(function (movie) {
        movieDataDiv.append(' <div class="col-md-3 col-xs-2">' +
            '<figure class="btn btn-secondary figure" id="' + movie.imdbID + '">' +
            '<img src="' + movie.Poster + '"" class="figure-img img-fluid img-rounded">' +
            '<figcaption class="figure-caption text-xs-right">' + movie.Title + ' ' + movie.Year +
            '<h4 class="rating">' + movie.imdbRating + ' / 10</h4>' +
            '</figcaption>' +
            '</figure>' +
            '</div>')
    })
}

ipc.on('ping', (event, message) => {
    populateUI(message);
})



    // $("figure").click(function (event) {
    //     console.log('click', event.target.id)
    //     alert(event.target.id);
    // });


// const selectmIDBtn = document.getElementById('select-directory')

// selectDirBtn.addEventListener('click', function (event) {
//   ipc.send('open-file-dialog')
// })

// ipc.on('selected-directory', function (event, path) {
//   document.getElementById('selected-file').innerHTML = `You selected: ${path}`
// })