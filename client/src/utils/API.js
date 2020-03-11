import axios from "axios";

export default {
    getShows: function (query) {
        return axios.get("/api/shows/" + query);
    }
}