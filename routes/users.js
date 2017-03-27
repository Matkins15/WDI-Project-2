var express = require('express');
var router = express.Router();
var authHelpers = require('../helpers/auth.js');
var User = require('../models/users.js');
var Meals = require('../models/meals.js');

//======= MEALS INDEX ==============================================
router.get('/', function(req, res, next) {
  Meals.find({})
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
router.get('/:userId', /*authHelpers.authorized,*/ function(req, res, next) {

  User.findById(req.params.userId)
       .exec(function(err, user) {
         if (err) {
           console.log("Oops, You are not authorized!");
         }
        if (!user) {console.log('route still fucked on show page');}
        Meals.find({})
          .exec(function(err, meals) {
              if(err) console.log(err);
              console.log(meals);
              res.render('users/show', {
                meals: meals,
                userId: req.params.userId
              });
          });

      });
});

//====== USER REGISTRATION ===============================================
router.post('/', authHelpers.createSecure, function(req, res){
  var user = new User({
    // firstName: req.body.firstName,
    // lastName: req.body.lastName,
    email: req.body.email,
    password_digest: res.hashedPassword
    // age: req.body.age,
    // weight: req.body.weight
  });

  user.save(function(err, user){
    if (err) console.log(err);
    console.log(user);
    console.log(req.session.currentUser);
    res.redirect('/sessions/login');
  });
});

module.exports = router;
