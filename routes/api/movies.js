const router = require("express").Router();
const movieController = require("../../controllers/movieController");

// Matches with "/api/movies"
router.route("/")
    .post(movieController.createMovie)
    .get(movieController.findAllMovie)

// Matches with "/api/movies/:id"
router
    .route("/:id")
    .get(movieController.findMovieById)
    .delete(movieController.removeMovie);

module.exports = router;