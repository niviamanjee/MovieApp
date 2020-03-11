// import axios from "axios";
// import SearchBar from "../Components/SearchBar"

export default {
    getShows: function (query) {
        return axios.get("/api/shows/" + query);
    }
}
