const router = require("express").Router();
var axios = require("axios");
var keys = require("../../text")

const THEMOVIEDB_API_KEY = keys.theMovieDB.secret



// router.get("/shows/:id", function (req, res) {


router.get("/shows/:id", async function (req, res) {

    var showObject = {}


    var show = req.params.id.replace(" ", "+")
    await axios.get("https://api.themoviedb.org/3/search/tv?api_key=" + THEMOVIEDB_API_KEY + "&query=" + show).then(
        function (result) {
            showObject = {
                title: result.data.results[0].original_name,
                id: result.data.results[0].id,
                summary: result.data.results[0].overview,
                image: result.data.results[0].poster_path
            }
            console.log(showObject)
            searchShowByID(showObject.id)
            // res.JSON(showObject)
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



    async function searchShowByID(id) {
        var id = id;

        await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${THEMOVIEDB_API_KEY}&language=en-US`).then(
            function (result) {


                showObject = {
                    creators: result.data.created_by.map(creator => creator.name),
                    episode_time: result.data.episode_run_time[0],
                    genres: result.data.genres.map(genre => genre.name),
                    networks: result.data.networks.map(network => network.name),
                    episodes_number: result.data.number_of_episodes,
                    seasons_number: result.data.number_of_seasons,
                    first_air_date: result.data.first_air_date

                }
                console.log(showObjectByID)
            }
        )
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

        await axios.get(`https://api.themoviedb.org/3/tv/${id}/content_ratings?api_key=${THEMOVIEDB_API_KEY}&language=en-US`).then(function (result) {

            showObject = {
                rating: result.data.results.filter(rating => rating.iso_3166_1 == "US")[0].rating
            }

        })


    }
    console.log(showObject)
    res.json(showObject)
})




