const router = require("express").Router();
const movieController = require("../../controllers/movieController");

router.route("/")
    .post(movieController.createMovie);


module.exports = router;