const db = require("../models");

// Defining methods for the showController
module.exports = {
    findAllShow: function (req, res) {
        db.Show
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => {
                res.json(dbModel)
                console.log(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    createShow: function (req, res) {
        db.Show
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Show
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}