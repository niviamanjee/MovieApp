import axios from "../../../../models/node_modules/axios";

export default {
  // Gets all movies
  getMovies: function() {
    return axios.get("/api/movies");
  }
};