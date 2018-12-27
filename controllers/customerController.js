var db = require("../models");



exports.loginUser = function(req, res) {
    // the login.js file in the public static files will make a POST request to validate the user
  res.json("/invoices");
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
      } else {
        db.User.create({
          username: req.body.username,
          billingAdress: req.body.billingAdress,
          password: req.body.password
        }).then(function() {
          res.send({redirect: '/'});
        }).catch(function(err) {
          res.json(err);
        });
      }
    })
  };
