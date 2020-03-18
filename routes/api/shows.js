const router = require("express").Router();
const showController = require("../../controllers/showController");

// Matches with "/api/shows"
router.route("/")
    .post(showController.createShow)
    .get(showController.findAllShow);

// Matches with "/api/shows/:id"
router
    .route("/:id")
    .get(showController.findShowById)
    .delete(showController.removeShow);

module.exports = router;