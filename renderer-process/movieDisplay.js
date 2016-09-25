const ipc = require('electron').ipcRenderer
var $ = require('jquery')

var populateUI = function(movies){
    var movieDataDiv = $("#movie-object");
    // movies.forEach(function(movie){
    //     // <img src="'+movie.details.Poster+'" height="150" width="150">
    //     movieDataDiv.append('<div id="'+movie.filepath+'" class="col-md-2"><div class="card card-block"><img class="card-img-top" src="'+movie.details.Poster+'" ><h4 class="card-text text-center">'+movie.details.Title+'</h4></div></div>');

    // })
    console.log("in pop")
    movies.forEach(function(movie){
    	movieDataDiv.append(' <div class="movie-grid col-md-2 col-xs-3">'+
        '<a href="#" class="browse-movie-link">'+
            '<figure class="figure"> <img src="'+movie.Poster+'"" class="figure-img img-fluid img-rounded">'+
                '<figcaption class="figure-caption text-xs-right">'+movie.Title+' '+movie.Year+
                    '<h4 class="rating">'+movie.imdbRating +' / 10</h4>'+
                '</figcaption>'+
            '</figure>'+
        '</a>'+
    '</div>')
    })
}

ipc.on('ping', (event, message) => {
  populateUI(message);
})

