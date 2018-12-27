var db = require('../models');


//Figure out how to sign in user
//Need a database

exports.loginUser = function(req, res) {
    // the login.js file in the public static files will make a POST request to validate the user
  res.json("/");
};


exports.signOutUser = function(req,res) {
    req.logout();
    res.redirect("/");
};