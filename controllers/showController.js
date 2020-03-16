const db = require("../models");

module.exports = {
    createShow: function (req, res) {
        db.Show

            .create(req.body)

            .catch(err => res.status(422).json(err));

    },
    findAll: function (req, res) {
        console.log("req.query of findAll method")
        db.Show
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}