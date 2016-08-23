var request = require('request');

module.exports = function (url) {
    return new Promise(function (resolve, reject) {
        if (!url) {
            return reject('No URL provided');
        }

        request({ url: url },
            function (error, response, body) {
                if (error) {
                    reject('Unable to fetch Movie');
                } else {
                    var aStart = 0, aEnd = 0;
                    var movie = {}
                    var movieList = []
                    while (aStart >= 0 && aEnd >= 0) {
                        aStart = body.indexOf('<a href="/url?q=http://www.imdb.com/title/')
                        aEnd = body.indexOf('<\/a>', aStart) + 4
                        if (aStart > 0 && aEnd > 0) {
                            lists = body.slice(aStart, aEnd)
                            // console.log(lists)
                            id = lists.slice(42, 51)
                            lists = lists.replace(/\<.+?\>/g, '')
                            title = lists.slice(0, lists.indexOf(')') + 1)
                            if (!!id && !!title) {
                                if (!movie[id]) {
                                    movie[id] = title;
                                }
                            }

                            body = body.slice(aEnd, body.length)
                        }
                    }
                    if (!Object.keys(movie).length) {
                        reject('Movie not found!')
                    } else {
                        movieList.push(movie)
                        resolve(movieList)
                    }
                }
            });
    })
}
