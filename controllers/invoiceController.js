var db  = require("../models");

exports.invoiceAll = function(req, res) {
    db.Invoice.findAll({
        where: {
            UserId: req.user.id
        }
    }).then(function(invoiceDB) {
        console.log(invoiceDB);
        res.render("", {
            layout: "invoice-customer-main",
            invoice: invoiceDB
        });
    });
};
  
exports.createInvoice = function(req, res) {

    console.log(req.user);
    // Add id from User onto req.body
    req.body.UserId = req.user.id;
  
    db.Invoice.create(req.body).then(function(invoiceDB) {
      res.json(invoiceDB);
    });
  };
  