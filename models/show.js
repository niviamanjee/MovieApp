const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const showSchema = new Schema({
    title: { type: String, required: true },
    creator: { type: String, required: true },
    synopsis: String,
    date: { type: Date, default: Date.now }
});

const Show = mongoose.model("Show", showSchema);

module.exports = Show;