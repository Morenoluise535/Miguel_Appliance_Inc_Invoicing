var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var ownerController = require("../controllers/ownerController");
var invoiceController = require ("../controllers/invoiceController")
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.post('/login', passport.authenticate("local"), ownerController.loginUser);

router.get('/signout', ownerController.signOutUser);

router.get("/invoice", invoiceController.invoiceAll)

router.post("/invoiceCreate", invoiceController.createInvoice)

module.exports = router;