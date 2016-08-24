var request = require('request');

module.exports = function (imdbId) {
    return new Promise(function (resolve, reject) {
        if (!imdbId) {
            return reject('No IMDB id provided');
        }
        var url = 'http://www.omdbapi.com/?i=' + imdbId + '&plot=short&r=json'

        request({ url: url, json: true },
            function (error, response, body) {
                if (error) {
                    reject('Unable to IMDB Movie');
                } else {
                    resolve(body)
                }
            });
    })
}
