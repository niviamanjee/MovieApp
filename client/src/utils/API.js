import axios from "axios";
// import SearchBar from "../Components/SearchBar"

export default {
    getShows: function (query) {
        return axios.get("/api/shows/" + query);
    },
    getMovies: function (movieName) {
        return axios.get("/api/movies/" + movieName);
    },
    getStreaming: function (query) {
        return axios.get("/api/streaming/" + query);
    },
    getSavedShows: function () {
        return axios.get("/api/show/save/");
    },
    saveShowCard: function (cardData) {
        return axios.post("/api/show/save/", cardData);
    },
    saveMovieCard: function (cardData) {
        return axios.post("/api/movie/save/", cardData);
    },
    deleteShowCard: function (id) {
        return axios.delete("/api/show/save/", id);
    },
    deleteMovieCard: function (id) {
        return axios.delete("/api/movie/save/", id);
    }
}
