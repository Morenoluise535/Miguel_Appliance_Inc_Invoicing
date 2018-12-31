var express = require('express');
var router  = express.Router()

var passport = require("../config/passport");
var customerController = require('../controllers/customerController');
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Uses the statis JS file for this post (Still need to work on it)
router.post("/login", passport.authenticate("local"), customerController.loginCustomer);

router.get("/signout", customerController.signOutCustomer);

router.get("/registration", customerController.registration);

router.post("/registration", customerController.signUpCustomer);

// router.get("/invoice", invoiceController.invoiceAll)



module.exports = router;