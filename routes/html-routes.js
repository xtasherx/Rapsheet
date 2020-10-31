/* eslint-disable indent */
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

    app.get("/", (req, res) => {
        // If the user already has an account send them to correct page
        if (req.user) {
            res.redirect("/band");
        }
        res.sendFile(path.join(__dirname, "../public/html/signup.html"));
    });

    app.get("/login", (req, res) => {
        // If the user already has an account send them to correct page
        if (req.user) {
            res.redirect("/login");
        }
        res.sendFile(path.join(__dirname, "../public/html/login.html"));
    });

    // Here we've add our isAuthenticated middleware to this route.
    // If a user who is not logged in tries to access this route they will be redirected to the signup page
    app.get("/venue", isAuthenticated, (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/venue.html"));
    });

    app.get("/band", isAuthenticated, (_req, res) => {
        res.sendFile(path.join(__dirname, "../public/html/band.html"));
    });
};