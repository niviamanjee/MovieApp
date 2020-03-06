require("./models/node_modules/dotenv/types").config()
exports.theMovieDB = {
    secret: process.env.API_KEY
  };
