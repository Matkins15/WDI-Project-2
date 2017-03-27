// REQUIREMENTS //

var express = require('express');
var router = express.Router({mergeParams: true});
var mongoose = require('mongoose');
var User = require('../models/users.js');
var Meals = require('../models/meals.js');
var authHelpers = require('../helpers/auth.js');
//===== NEW MEALS ========================================
// router.get('/new', function(req, res) {
//
//       User.findById(req.params.userId)
//       .exec(function(err, user) {
//           if (err) {
//             console.log(err);
//           }
//       Meals.findById(req.params.id)
//         .exec(function(err, meals) {
//           if(err) {
//             console.log(err);
//           }
//
//           res.render('meals/new', {
//               meals: meals,
//               user: user
//           });
//       });
//       });
// });

router.get('/new', function(req, res, next) {
  console.log(req.params.userId);
  res.send('hey boys');
});
//===== CREATE MEALS ======================================
router.post('/', function(req, res) {
  User.findById(req.params.userId)
    .exec(function(err, user) {
      if(err) {
        console.log(err);
      }
      var newMeals = new Meals({
          name: req.body.name,
          description: req.body.description,
          exampleMeal: req.body.exampleMeal,
          calories: req.body.calories,
          image: req.body.image
    });
      newMeals.save();
      user.meals.push(newMeals);
      user.save();
      res.redirect(`/users/${req.params.userId}`);
    });
});

//======== EDIT MEALS ====================================
router.get('/:id/edit', function(req,res) {
  console.log(req.params.userId);
    User.findById(req.params.userId)
    .exec(function(err, user) {
        if (err) {
          console.log(err);
        }
      Meals.findById(req.params.id)
        .exec(function(err, meals) {
        if(err) {
          console.log(err);
        }

        res.render('meals/edit', {
            meals: meals,
            userId: req.params.userId
          });
        });
    });
});


//======== UPDATE ========================================

//create a PUT "/:id" route that saves the changes from the meals.
router.put('/:id', function(req, res) {
    Meals.findByIdAndUpdate(req.params.id)
        .exec(function(err, meals) {
            if (err) {
              console.log(err);
            }
          meals.name = req.body.name;
          meals.description = req.body.description;
          meals.exampleMeal = req.body.exampleMeal;
          meals.calories = req.body.calories;
          meals.save();
        // });
        // var newMeal = meals;
        // User.findById(req.params.userId)
        //   .exec(function(err, user) {
        //     if (err) { console.log(err); }
        //     else if (!user) {console.log('route fucked');}
        //     console.log(user.meals);
        //     // var mealsToEdit = user.meals.id(req.params.id);
        //     // mealsToEdit.name = req.body.name;
        //     // mealsToEdit.description = req.body.description;
        //     // mealsToEdit.exampleMeal = req.body.exampleMeal;
        //     // mealsToEdit.calories = req.body.calories;
        //     user.meals.push(newMeal);
        //     user.save();
            res.redirect(`/users/${req.params.userId}`);
      });
});

//========= DELETE MEALS =================================
router.delete('/:id', function(req, res) {
    User.findByIdAndRemove(req.params.userId, {
      $pull: {
        meals: {_id: req.params.id}
      }
    })
      .exec(function(err, author) {
          if (err) {
            console.log(err);
          }
        });
        Meals.findByIdAndRemove(req.params.id)
        .exec(function(err, meals){
          if(err){
            console.log(err);
          }
          res.redirect(`/users/${req.params.userId}`);
        });
      });

//====== EXPORTS ===========================================
module.exports = router;
