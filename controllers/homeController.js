var db = require("../models")

exports.index = function(req,res) {
  res.render('index', {
    layout: 'main'
  });
};

exports.loginCustomer = function(req, res) {
  // the login.js file in the public static files will make a POST request to validate the user
  
  res.json("/invoices");
  console.log("You're logged in!");
  
};