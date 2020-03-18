const router = require("express").Router();
var keys = require("../../text")
// const unirest = require("unirest");

const utellyAPI_Key = keys.theMovieDB.utelly

router.get("/:id", function (req, res) {

    console.log(`Req id: ${req.params.id}`)
    var request = unirest("GET", "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup");

    request.query({
        "term": req.params.id,
        "country": "us"
    });

    request.headers({
        "x-rapidapi-host": "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
        "x-rapidapi-key": "7fd5912b71mshbf225cfb6b43703p13c811jsne79c945dce04"
    });


    request.end(function (result) {

        const response = result.body.results[0].locations.map(stream => ({
            service: stream.name.slice(0, -5),
            url: stream.url
        })
        );

        res.json(response)
        console.log(response)
    });
})


module.exports = router;