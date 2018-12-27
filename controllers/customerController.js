var db = require("../models");



exports.loginUser = function(req, res) {
    // the login.js file in the public static files will make a POST request to validate the user
  res.json("/customer");
};

exports.signOutUser = function(req,res) {
    req.logout();
    res.redirect("/");
};

exports.registration = function(req,res) {
    res.render("customer", {
        layout: "registration-main"
    });
};

exports.signUpUser = function(req,res) {

    db.customer.findAll({
      where: {username: req.body.username}
    }).then(function(users) {
      if (users.length > 0) {
        res.json({
          duplicateUser: true
        });
      //At some point, make sure that only one user can be associated with an email.
      } else {
        db.User.create({
          username: req.body.username,
          billingAdress: req.body.email,
          password: req.body.password
        }).then(function() {
          res.send({redirect: '/'});
        }).catch(function(err) {
          res.json(err);
        });
      }
    })
  };
