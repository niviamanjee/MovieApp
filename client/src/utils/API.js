import axios from "../../../models/node_modules/axios";

export default {
  // Gets all movies
  getMovies: function() {
    return axios.get("/api/movies");
  }
};
import axios from "axios";

export default {
    getShows: function (string) {
        return axios.get("/api/search/shows" + string);
    }
}
