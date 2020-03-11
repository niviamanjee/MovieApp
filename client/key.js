require("./node_modules/dotenv/types").config()
exports.theMovieDB = {
    secret: process.env.sam
  };
