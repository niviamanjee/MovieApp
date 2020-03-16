const router = require("express").Router();
const homeRoutes = require("./home");
const movieDBRoutes = require("./moviedb")
const moreInfoRoutes = require("./moreInfo")
const showDBRoutes = require("./showsdb")
const savedMoviesRoute = require("./movies")
const savedShowsRoute = require("./shows")


router.use("/home", homeRoutes);
router.use("/movies", movieDBRoutes);
router.use("/moreInfo", moreInfoRoutes);
router.use("/shows", showDBRoutes);
router.use("/movie/save", savedMoviesRoute);
router.use("/show/save", savedShowsRoute)

module.exports = router;
