var express = require('express');
var router  = express.Router()

var passport = require("../config/passport");
var customerController = require('../controllers/customerController');
var invoiceController = require ("../controllers/invoiceController")
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.post("/login", passport.authenticate("local"), customerController.loginCustomer);

router.get("/signout", customerController.signOutCustomer);

router.get("/registration", customerController.registration);

router.post("/registration", customerController.signUpCustomer);

router.get("/invoice", isAuthenticated, invoiceController.invoiceAll)

module.exports = router;