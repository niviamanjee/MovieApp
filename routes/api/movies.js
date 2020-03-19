const router = require("express").Router();
const movieController = require("../../controllers/movieController");

router
    .route("/")
    // This route post the saved movies to MongoDb
    .post(movieController.saveMovie)
    // This route gets the saved data from MongoDB
    .get(movieController.findAll)

router
    .route("/:id")
    .delete(movieController.remove)    


module.exports = router;