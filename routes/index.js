var express = require('express');
var router = express.Router();
var authHelpers = require('../helpers/auth.js');
var User = require('../models/users.js');
var Meals = require('../models/meals.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {layout: false});
});

module.exports = router;
