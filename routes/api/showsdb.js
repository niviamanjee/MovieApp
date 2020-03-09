const router = require("express").Router();
var axios = require("axios");
var keys = require("../../text")

const THEMOVIEDB_API_KEY = keys.theMovieDB.secret



// router.get("/shows/:id", function (req, res) {


function searchShow(query) {
    var show = query.replace(" ", "+")

    axios.get("https://api.themoviedb.org/3/search/tv?api_key=" + THEMOVIEDB_API_KEY + "&query=" + show).then(
        function (result) {
            var showObject = {
                title: result.data.results[0].original_name,
                id: result.data.results[0].id,
                summary: result.data.results[0].overview,
                image: result.data.results[0].poster_path
            }
            console.log(showObject)
            res.JSON(showObject)
        })
        .catch(function (error) {
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
}

searchShow("Rick and Morty")
// })
