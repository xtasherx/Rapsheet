/* eslint-disable indent */
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const exphbs = require("express-handlebars");


const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//encryption for token to check if it's valid
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes 
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
});