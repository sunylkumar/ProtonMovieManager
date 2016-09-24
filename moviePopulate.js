var populateUI = function(){
    var movieDataDiv = $("#movie_data .row");
    movieData.forEach(function(movie){
        // <img src="'+movie.details.Poster+'" height="150" width="150">
        movieDataDiv.append('<div id="'+movie.filepath+'" class="col-md-2"><div class="card card-block"><img class="card-img-top" src="'+movie.details.Poster+'" ><h4 class="card-text text-center">'+movie.details.Title+'</h4></div></div>');

    })
}



const ipc = require('electron').ipcRenderer


ipc.on('asynchronous-reply', function (event, arg) {
  const message = `Asynchronous message reply: ${arg}`
  document.getElementById('async-reply').innerHTML = message
})
