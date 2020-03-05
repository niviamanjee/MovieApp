var axios = require("axios");

axios.get("https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=Jack+Reacher").then(
    function(res) {
        console.log (res)
    })
    .catch(function(error) {
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