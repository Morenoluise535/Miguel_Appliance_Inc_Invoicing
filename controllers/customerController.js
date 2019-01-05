var db = require("../models");



exports.loginCustomer = function(req, res) {
    // the login.js file in the public static files will make a POST request to validate the user

  res.json("/");

  console.log("You're logged in!");
  
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
  
  db.Customer.findAll({
    where: {email: req.body.email}
  }).then(function(customers) {
    if (customers.length > 0) {
      res.json({
        duplicateCustomer: true
      });
    } else {
      db.Customer.create({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
      }).then(function() {
        res.send({redirect: "/"});
      }).catch(function(err) {
        console.log("err")
        res.json(err);        
      });
    }
  })
};
