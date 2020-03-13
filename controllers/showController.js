const db = require("../models");

module.exports = {
    createShow: function (req, res) {
        console.log("req.body of controller:", req.body)
        db.Show

            .create(req.body)

            .catch(err => res.status(422).json(err));

    }
}