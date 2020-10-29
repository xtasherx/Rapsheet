<<<<<<< HEAD
const express = require("express");


const app = express();
const PORT = process.env.PORT || 8080;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("app/public"));


require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes.js")(app);

app.listen(PORT, () => {
  console.log("http://localhost:" + PORT);
});
=======

const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");


const PORT = process.env.PORT || 8080;
const db = require("./models");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// routes 
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
>>>>>>> main
