var db = require("../models")

exports.index = function(req,res) {
    res.render('index', {
      layout: 'main'
    });
  };