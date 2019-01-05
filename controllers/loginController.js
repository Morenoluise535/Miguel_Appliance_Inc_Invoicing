//This renders the login page only

var db = require("../models")

exports.index = function(req,res) {
    res.render('login/login', {
      layout: 'login-main'
    });
  };