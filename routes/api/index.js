const router = require("express").Router();
// const movieRoutes = require("./movies");
const movieDBRoutes = require("./moviedb")
const showDBRoutes = require("./showsdb")
const streamingAPI = require("./utellyapi")
const savedMoviesRoute = require("./movies")
const savedShowsRoute = require("./shows")

// Movie routes
// router.use("/movie", movieRoutes);

router.use("/movies", movieDBRoutes);
router.use("/shows", showDBRoutes);
router.use("/streaming", streamingAPI)
router.use("/movie/save", savedMoviesRoute);
router.use("/show/save", savedShowsRoute);

module.exports = router;
