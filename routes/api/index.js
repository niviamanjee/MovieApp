const router = require("express").Router();
// const movieRoutes = require("./movies");
const movieDBRoutes = require("./moviedb")
const showDBRoutes = require("./showsdb")

// Movie routes
// router.use("/movie", movieRoutes);
router.use("/movies", movieDBRoutes);
router.use("/shows", showDBRoutes);

module.exports = router;
