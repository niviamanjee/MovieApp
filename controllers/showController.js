const db = require("../models");

module.exports = {
    createShow: function (req, res) {
        db.Show
            .create(req.body)
            .catch(err => res.status(422).json(err));
    }
}