import axios from "axios";
// import SearchBar from "../Components/SearchBar"

export default {
    getTrending: function () {
        return axios.get("/api/home/");
    },
    getShows: function (query) {
        return axios.get("/api/shows/" + query);
    },
    getMovies: function (movieName) {
        return axios.get("/api/movies/" + movieName);
    },
    getMoreInfo: function (info) {
        return axios.get("/api/moreInfo/" + info);
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
        return axios.post("/api/movie/save/", cardData)
    },
    getSavedMovieData: function () {
        return axios.get("/api/movie/save/")
    },
    deleteShowCard: function (id) {
        return axios.delete("/api/show/save/" + id);
    },
    deleteMovieCard: function (id) {
        return axios.delete("/api/movie/save/" + id);
    }
}
