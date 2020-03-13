const router = require("express").Router();
var axios = require("axios");
var keys = require("../../text")

const THEMOVIEDB_API_KEY = keys.theMovieDB.secret



// router.get("/shows/:id", function (req, res) {


router.get("/:id", function (req, res) {

    console.log(req.body)
    var showObject = {}

    var show = req.params.id.replace(" ", "+")

    axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${THEMOVIEDB_API_KEY}&query=${show}`).then(
        function (result1) {
            console.log("result data: ", result1.data)


            showObject = {
                title: result1.data.results[0].original_name,
                id: result1.data.results[0].id,
                summary: result1.data.results[0].overview,
                image: "https://image.tmdb.org/t/p/w500/" + result1.data.results[0].poster_path
            }
            axios.get(`https://api.themoviedb.org/3/tv/${showObject.id}?api_key=${THEMOVIEDB_API_KEY}&language=en-US&append_to_response=content_ratings`).then(
                function (result2) {


                    showObject.creators = result2.data.created_by.map(creator => creator.name);
                    showObject.episode_time = result2.data.episode_run_time[0];
                    showObject.genres = result2.data.genres.map(genre => genre.name);
                    showObject.networks = result2.data.networks.map(network => network.name);
                    showObject.episodes_number = result2.data.number_of_episodes;
                    showObject.seasons_number = result2.data.number_of_seasons;
                    showObject.first_air_date = result2.data.first_air_date;
                    showObject.rating = result2.data.content_ratings.results.filter(rating => rating.iso_3166_1 == "US")[0].rating;

                    res.json(showObject)
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



            console.log(showObject)
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

})


module.exports = router;