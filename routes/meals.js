// REQUIREMENTS //

var express = require('express');
var router = express.Router({mergeParams: true});
var mongoose = require('mongoose');
var User = require('../models/users.js');
var Meal = require('../models/meals.js');
var authHelpers = require('../helpers/auth.js');

//===== CREATE MEALS ======================================
router.post('/', function(req, res) {
  User.findById(req.params.userId)
    .exec(function(err, user) {
      if(err) {
        console.log(err);
      }
      var newMeal = new Meal({
          name: req.body.name,
          description: req.body.description,
          exampleMeal: req.body.exampleMeal,
          calories: req.body.calories,
          imgURL: req.body.imgURL
      });
      // newMeal.save();
      user.meals.push(newMeal);
      user.save();
      res.redirect(`/users/${req.params.userId}`);
    });
});

//======== EDIT MEALS ====================================
router.get('/:id/edit', function(req,res) {
  User.findById(req.params.userId)
    .exec(function(err, user) {
      if (err) { return console.log(err); }

      console.log(user);

      var findMeal = user.meals.id(req.params.id)

      res.render('meals/edit', {
        meal: findMeal,
        userId: req.params.userId
      });
    });
});


//======== UPDATE ========================================

//create a PUT "/:id" route that saves the changes from the meals.
router.put('/:id', function(req, res) {
    // User.meals.findByIdAndUpdate(req.params.id)
    //     .exec(function(err, meals) {
    //         if (err) {
    //           console.log(err);
    //         }
    //       meals.name = req.body.name;
    //       meals.description = req.body.description;
    //       meals.exampleMeal = req.body.exampleMeal;
    //       meals.calories = req.body.calories;
    //       meals.imgURL = req.body.imgURL;
    //       meals.save();
    //     // });
    //     // var newMeal = meals;

        User.findById(req.params.userId)
          .exec(function(err, user) {
            if (err) { console.log(err); }
            else if (!user) {console.log('route fucked');}
            console.log(user.meals);

            var thisMeal = req.params.id;
            var meal = user.meals.find(function (meal) {
              return meal.id = thisMeal;
            });

              meal.name = req.body.name;
              meal.description = req.body.description;
              meal.exampleMeal = req.body.exampleMeal;
              meal.calories = req.body.calories;
            // user.meals.push(newMeal);
            user.save();
            res.redirect(`/users/${req.params.userId}`);
      });
});

//========= DELETE MEALS =================================
router.delete('/:id', function(req, res) {
  // User.findByIdAndRemove(req.params.userId, {
  //   $pull: {
  //     meals: {_id: req.params.id}
  //   }
  // })
  //   .exec(function(err, author) {
  //     if (err) { return console.log(err); }
  //   });
  //
  // Meal.findByIdAndRemove(req.params.id)
  //   .exec(function(err, meals){
  //     if (err) { return console.log(err); }
  //     res.redirect(`/users/${req.params.userId}`);
  //   });
});

//====== EXPORTS ===========================================
module.exports = router;
