var db = require("../models")

exports.index = function(req,res) {
    res.render('about/about', {
      layout: 'about-main'
    });
  };