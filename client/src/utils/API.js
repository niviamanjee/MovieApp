import axios from "axios";

export default {
    getShows: function (string) {
        return axios.get("/api/search/shows" + string);
    }
}