const router = require("express").Router();
// const movieRoutes = require("./movies");
const movieDBRoutes = require("./moviedb")

// Movie routes
// router.use("/movie", movieRoutes);
router.use("/movie", movieDBRoutes);

module.exports = router;
