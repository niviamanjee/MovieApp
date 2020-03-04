const router = require("express").Router();
const movieRoutes = require("./movies");
const movieDBRoutes = require("./moviedb")

// Book routes
router.use("/movie", movieRoutes);
router.use("/search", movieDBRoutes);

module.exports = router;
