var express = require('express');
var router  = express.Router();

var invoiceController = require('../controllers/invoiceController');
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get('/', isAuthenticated, invoiceController.invoiceAll);

router.post('/new', isAuthenticated, invoiceController.createInvoice);

module.exports = router;