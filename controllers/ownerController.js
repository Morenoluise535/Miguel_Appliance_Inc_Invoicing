var db = require('../models');


//Figure out how to sign in user
//Need a database


exports.signOutUser = function(req,res) {
    req.logout();
    res.redirect("/");
};