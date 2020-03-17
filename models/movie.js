const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: { type: String, required: true },
    overview: { type: String, required: true },
    released: { type: String, required: true },
    image: { type: String, required: true },
    synopsis: String,
    date: { type: Date, default: Date.now }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
