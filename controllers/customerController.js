var db = require("../models");



exports.loginCustomer = function(req, res) {
    // the login.js file in the public static files will make a POST request to validate the user
  res.json("/invoices");
};

exports.signOutCustomer = function(req,res) {
    req.logout();
    res.redirect("/");
};

exports.registration = function(req,res) {
    res.render("registration/registration", {
        layout: "registration-main"
    });
};

exports.signUpCustomer = function(req,res) {
  
    db.customer.findAll({
      where: {username: req.body.username}
    }).then(function(customers) {
      if (customers.length > 0) {
        res.json({
          duplicateCustomer: true
        });
      } else {
        db.Customer.create({
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
