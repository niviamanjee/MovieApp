const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");

const connection = "mongodb+srv://kingbrs49:Holverstott1984!@pcc-cluster-622-jbx7v.mongodb.net/movieApp?retryWrites=true&w=majority";
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

const routes = require("./routes");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"client/build")));
    app.get("*",(req, res) => { 
        res.sendFile(path.join(__dirname + "/client/build/index.html")) 
    });
}

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/movieApp", { useNewUrlParser: true });

// Add routes, both API and view
app.use(routes);
// Start the API server
app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


