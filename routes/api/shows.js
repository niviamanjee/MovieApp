const router = require("express").Router();
const showController = require("../../controllers/showController");


router.route("/")
    .post(showController.createShow)
    .get(showController.findAllShow);


router
    .route("/:id")
    .delete(showController.remove);

module.exports = router;