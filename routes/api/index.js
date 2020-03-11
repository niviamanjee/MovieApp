const router = require("express").Router();
// const movieRoutes = require("./movies");
const movieDBRoutes = require("./moviedb")
const showDBRoutes = require("./showsdb")
const savedMoviesRoute = require("./movies")
const savedShowsRoute = require("./shows")


router.use("/movies", movieDBRoutes);
router.use("/shows", showDBRoutes);
router.use("/movie/save", savedMoviesRoute);
router.use("/show/save", savedShowsRoute)

module.exports = router;
