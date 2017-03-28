var express = require('express');
var router = express.Router();
var authHelpers = require('../helpers/auth.js');
var User = require('../models/users.js');
var Meal = require('../models/meals.js');

//======= MEALS INDEX ==============================================
router.get('/', function(req, res, next) {
  Meal.find({})
    .exec(function(err, meals){
      if(err){
        console.log(err);
      };
      console.log(meals);
      res.render('users/index', {
        meals: meals
      });
    });
});

//====== SIGN UP PAGE ==============================================
router.get('/signup', function(req, res){
  res.render('users/signup.hbs');
});

//===== SHOW PAGE (USER LOGGED IN): shows the page ONLY IF it's the current user's session. ======
router.get('/:userId', /*authHelpers.authorized,*/ function showAction(req, res, next) {

  User
    .findById(req.params.userId)
    .exec(function(err, user) {
      if (err) { return console.log(err); }
      if (!user) { return console.log('no user'); }

      res.render('users/show', {
        user: user,
        userId: req.params.userId
      });
    });
});

//====== USER REGISTRATION ===============================================
router.post('/', authHelpers.createSecure, function(req, res){
  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password_digest: res.hashedPassword,
    age: req.body.age,
    weight: req.body.weight
  });

  user.save(function(err, user){
    if (err) console.log(err);
    console.log(user);
    console.log(req.session.currentUser);
    res.redirect('/sessions/login');
  });
});

module.exports = router;
