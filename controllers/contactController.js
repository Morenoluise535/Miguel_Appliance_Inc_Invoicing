// exports.index = function(req, res) {
//     res.render("contactHandlebar");
// };

var db = require("../models")

exports.index = function(req,res) {
    res.render('contact/contact', {
      layout: 'contact-main'
    });
  };