const router = require("express").Router();
var axios = require("axios");
var keys = require("../../text")

const THEMOVIEDB_API_KEY = keys.theMovieDB.secret

// router.get("/shows/:id", function (req, res) {

router.get("/:id", function (req, res) {

    console.log("test")
    var movieObject = {}

    var movie = req.params.id.replace(" ", "+")
    var movieArr = []
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${THEMOVIEDB_API_KEY}&query=${movie}&page=1`).then(
        function (result) {
            // console.log('Movie result:', result.data)
            for (var i = 0; i < result.data.results.length; i++) {
                movieObject = {
                    title: result.data.results[i].original_title,
                    releaseDate: result.data.results[i].release_date,
                    overview: result.data.results[i].overview,
                    poster: result.data.results[i].poster_path,
                    rating: result.data.results[i].vote_average,
                    movieId: result.data.results[i].id

                }
                movieArr.push(movieObject)
                //   axios.get(`https://api.themoviedb.org/3/movie/${movieObject.movieId}?api_key=${THEMOVIEDB_API_KEY}&language=en-US`).then(
                //     function (result2) {

                //         // console.log(result2.data)

                //         movieObject.budget = result2.data.budget,
                //         movieObject.runtime = result2.data.runtime,
                //         movieObject.homepage = result2.data.homepage



                //         movieArr.push(movieObject)
                //         res.json(movieArr)
                //         console.log(movieArr)
                //     }

                // ).catch(function (error) {
                //     if (error.res) {
                //     } else if (error.request) {
                //         // The request was made but no response was received
                //         // `error.request` is an object that comes back with details pertaining to the error that occurred.
                //         console.log(error.request);
                //     } else {
                //         // Something happened in setting up the request that triggered an Error
                //         console.log("Error", error.message);
                //     }
                //     console.log(error.config);
                // });

            }

            res.json(movieArr)
            // console.log(result.data.results)

        }).catch(function (error) {
            if (error.res) {
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
});

module.exports = router;