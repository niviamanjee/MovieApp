const db = require("../models");

// Defining methods for the movieController
module.exports = {
    findAllMovie: function (req, res) {
        db.Movie
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findMovieById: function (req, res) {
        db.Movie
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createMovie: function (req, res) {
        db.Movie
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeMovie: function (req, res) {
        db.Movie
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
}