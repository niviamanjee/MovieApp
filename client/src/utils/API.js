import axios from "axios";
// import SearchBar from "../Components/SearchBar"

export default {
    getShows: function (query) {
        return axios.get("/api/shows/" + query);
    },
    getMovies: function (movieName) {
        return axios.get("/api/movies/" + movieName);
    },
    saveShowCard: function (cardData) {
        return axios.post("/api/show/save/", cardData)
    },
    saveMovieCard: function (cardData) {
        return axios.post("/api/movie/save/", cardData)
    }
}
