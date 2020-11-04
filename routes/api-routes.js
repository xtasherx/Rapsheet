/* eslint-disable indent */
const db = require("../models");
const passport = require("../config/passport");
const { Sequelize } = require("../models");

module.exports = function(app) {
    // looking for a local strategy for authentication
    app.post("/api/login", passport.authenticate("local"), (req, res) => {
        res.json(req.user);
    });


    //  signup route 
    app.post("/api/signup", (req, res) => {
        db.User.create({
                email: req.body.email,
                password: req.body.password,
                isBand: req.body.isBand,
                address: req.body.address,
                address2: req.body.address2,
                city: req.body.city,
                state: req.body.state,
                zip: req.body.zip
            })
            .then(() => {
                res.redirect(307, "/api/login");
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", (req, res) => {
        console.log(req.user);
        if (!req.user) {
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            res.json({
                email: req.user.email,
                id: req.user.id,
                address: req.user.address,
                city: req.user.city,
                state: req.user.state,
                zip: req.user.zip
            });
        }

    });
    //gets info from band table for the user
    app.get("/api/bandData/:id", (_req, res) => {
        db.Band.findAll({
            where: { userId: _req.params.id },
            include: [db.User]
        }).then((dbUser) => {
            console.log(dbUser);
            res.json({
                email: dbUser[0].User.email,
                address: dbUser[0].User.address,
                address2: dbUser[0].User.address2,
                city: dbUser[0].User.city,
                state: dbUser[0].User.state,
                zip: dbUser[0].User.zip,
                isBand: dbUser[0].User.isBand,
                bandName: dbUser[0].bandName,
                bandBio: dbUser[0].bandBio,
                bandGenre: dbUser[0].bandGenre,
                bandPic1: dbUser[0].profPic1,
                bandPic2: dbUser[0].profPic2,
                bandPic3: dbUser[0].profPic3,
                memPic1: dbUser[0].memPic1,
                memPic2: dbUser[0].memPic2,
                memPic3: dbUser[0].memPic3,
                memPic4: dbUser[0].memPic4,
                vid1: dbUser[0].vid1,
                vid2: dbUser[0].vid2
            });
        
        });
      
    });
    //Dgets info from venue table for the user 
    app.get("/api/venueData/:id", (_req, res) => {
        db.Venue.findAll({
            where: { userId: _req.params.id },
            include: [db.User]
        }).then((dbUser) => {
            console.log(dbUser);
          res.json({
            email: dbUser[0].User.email,
            address: dbUser[0].User.address,
            address2: dbUser[0].User.address2,
            city: dbUser[0].User.city,
            state: dbUser[0].User.state,
            zip: dbUser[0].User.zip,
            isBand: dbUser[0].User.isBand,
            venueInfo: dbUser[0].venueInfo,
            venueName:dbUser[0].venueName,
            venueSize: dbUser[0].venueSize,
            venueRate: dbUser[0].venueRate,
            venueDesc: dbUser[0].venueDesc,
            venuePic1: dbUser[0].profPic1,
            venuePic2: dbUser[0].profPic2,
            venuePic3: dbUser[0].profPic3,
            venuePic4: dbUser[0].subPic2
            });
        });
    });

    //edit band route
    app.post("/api/editBandProfile", (req, res) => {
        db.Band.create({
                UserId: req.body.userId,
                bandName: req.body.bandName,
                bandGenre: req.body.bandGenre,
                bandBio: req.body.bandBio,
                profPic1: req.body.profPic1,
                profPic2: req.body.profPic2,
                profPic3: req.body.profPic3,
                memPic1: req.body.memPic1,
                memPic2: req.body.memPic2,
                memPic3: req.body.memPic3,
                memPic4: req.body.memPic4,
                vid1: req.body.vid1,
                vid2: req.body.vid2
            })
            .then(() => {
                res.redirect(307, "/band");
            })
            .catch((err) => {
                res.status(401).json(err);
            });
    });

                //edit venue route
                app.post("/api/editVenueProfile", (req, res) => {
                  db.Venue.create({
                          UserId: req.body.userId,
                          venueName: req.body.venueName,
                          venueSize: req.body.venueSize,
                          rate: req.body.venueRate,
                          venueInfo: req.body.venueInfo,
                          profPic1: req.body.profPic1,
                          profPic2: req.body.profPic2,
                          profPic3: req.body.profPic3,
                          subPic2: req.body.subPic2
                      })
                      .then(() => {
                          res.redirect(307, "/venue");
                      })
                      .catch((err) => {
                          res.status(401).json(err);
                      });
              });
              // returns random band results 
              app.get("/api/getBands", (_req, res) => {
                db.Band.findAll({
                  order: Sequelize.literal("rand()"),
                  limit: 5,
                  include: [db.User]
                }).then((dbUser) => {
                    console.log(dbUser);
                  res.json({
                    dbUser
                    });
                });
              });
              // returns random venue results 
              app.get("/api/getVenues", (_req, res) => {
                db.Venue.findAll({
                  order: Sequelize.literal("rand()"),
                  limit: 5,
                  include: [db.User]
                }).then((dbUser) => {
                    console.log(dbUser);
                  res.json({
                    dbUser
                    });
                });
              });

    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });
};

