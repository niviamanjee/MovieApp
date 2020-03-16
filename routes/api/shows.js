const router = require("express").Router();
const showController = require("../../controllers/showController");

router.route("/")
    .post(showController.createShow)
    .get(showController.findAll)




module.exports = router;