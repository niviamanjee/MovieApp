const router = require("express").Router();
var axios = require("axios");
var keys = require("../../text")

const THEMOVIEDB_API_KEY = keys.theMovieDB.secret



// router.get("/shows/:id", function (req, res) {


router.get("/:id", function (req, res) {
    var infoObject = {}
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${THEMOVIEDB_API_KEY}&language=en-US`).then(
            function (result) {
                console.log(result.data)
                infoObject.budget = result.data.budget,
                infoObject.runtime = result.data.runtime,
                infoObject.homepage = result.data.homepage
                res.json(infoObject)
    // console.log(infoObject)
            }
            

        ).catch(function (error) {
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
})


module.exports = router;