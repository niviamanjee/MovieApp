const router = require("express").Router();
var axios = require("axios");
var keys = require("../../text")

const THEMOVIEDB_API_KEY = keys.theMovieDB.secret



function getShowID(string) {

  var show = string.replace(" ", "+")
  axios.get("https://api.themoviedb.org/3/search/tv?api_key=" + THEMOVIEDB_API_KEY + "&query=" + show).then(
    function (res) {
      var showObject = {
        title: res.data.results[0].original_name,
        id: res.data.results[0].id,
        summary: res.data.results[0].overview,
        image: res.data.results[0].poster_path
      }
      console.log(showObject)
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



getShowID("Rick and Morty")




module.exports = router