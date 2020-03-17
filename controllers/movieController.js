const db = require("../models");

module.exports = {
    saveMovie: function (req, res) {
        db.Movie
            .create(req.body)
            .catch(err => res.status(422).json(err));
    },
    findAll: function (req, res) {
        db.Movie
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}