const router = require("express").Router();
var axios = require("axios");
var keys = require("../../text")

const THEMOVIEDB_API_KEY = keys.theMovieDB.secret

// router.get("/shows/:id", function (req, res) {

router.get("/", function (req, res) {

    console.log("test")
    var trendingObject = {}
    var trendingArr = []
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${THEMOVIEDB_API_KEY}`).then(
        function (result) {
            // console.log(result.data.results)
          
          for (var i = 0; i < result.data.results.length; i++) {
            trendingObject = {
              titleM: result.data.results[i].title,
              titleS: result.data.results[i].name,
              releaseDate: result.data.results[i].release_date,
              airedDate: result.data.results[i].first_air_date,
              overview: result.data.results[i].overview,
              poster: result.data.results[i].poster_path,
              rating: result.data.results[i].vote_average,
              mediaType: result.data.results[i].media_type,
              movieId: result.data.results[i].id
              
          }
          trendingArr.push(trendingObject)  
            }
   
    res.json(trendingArr)
    // console.log(movieArr)
    
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