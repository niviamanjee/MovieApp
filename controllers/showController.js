const db = require("../models");

// Defining methods for the showController
module.exports = {
    findAllShow: function (req, res) {
        db.Show
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findShowById: function (req, res) {
        db.Show
            .findShowById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createShow: function (req, res) {
        db.Show
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeShow: function (req, res) {
        db.Show
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}