const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema({
    title: { type: String, required: true },
    imageUrl: { type: String },
    creator: { type: [String], required: true },
    synopsis: String,
    episode_time: { type: String },
    genres: { type: [String] },
    networks: { type: [String] },
    episodes_number: { type: String },
    seasons_number: { type: String },
    first_air_date: { type: String },
    rating: { type: String },
    date: { type: Date, default: Date.now }
});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;