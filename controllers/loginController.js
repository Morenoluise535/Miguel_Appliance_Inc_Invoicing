// exports.index = function(req, res) {
//     res.render("loginHandlebar");
// };

var db = require("../models")

exports.index = function(req,res) {
    res.render('login/login', {
      layout: 'login-main'
    });
  };