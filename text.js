require("dotenv").config()
exports.theMovieDB = {
  secret: process.env.API_KEY,
  utelly: process.env.RapidAPI_KEY
};
