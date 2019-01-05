var db  = require("../models");

exports.invoiceAll = function(req, res) {
    db.Invoice.findAll({
        where: {
            id: 1
        }
    }).then(function(MiguelAppliance_db) {
        res.render("invoice-customer/invoice-customer", {
            layout: "invoice-customer-main",
            invoice: MiguelAppliance_db
        });
    });
};
  
exports.createInvoice = function(req, res) {

    console.log(req.customer);
    // Add id from User onto req.body
    req.body.email = req.customer.id;
  
    db.Invoice.create(req.body).then(function(MiguelAppliance_db) {
      res.json(MiguelAppliance_db);
    });
  };
  