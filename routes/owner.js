var express = require('express');
var router  = express.Router();

var passport = require("../config/passport");
var ownerController = require('../controllers/ownerController');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.post('/login', passport.authenticate("local"), ownerController.loginUser);

router.get('/signout', ownerController.signOutUser);

module.exports = router;