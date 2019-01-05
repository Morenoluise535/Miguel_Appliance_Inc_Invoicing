var express = require("express");
var router  = express.Router();

var homeController = require("../controllers/homeController");

var passport = require("../config/passport");
var customerController = require('../controllers/customerController');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", homeController.index);

router.post("/", passport.authenticate("local"), customerController.loginCustomer);

module.exports = router;