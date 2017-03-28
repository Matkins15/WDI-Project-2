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
      if (err) {console.log(err); }

      var mealToEdit = user.meals.id(req.params.id);
      // var meal = user.meals.find(function (meal) {
      //   return meal.id = mealToEdit;
      // });
      //   meal.name = req.body.name;
      //   meal.description = req.body.description;
      //   meal.exampleMeal = req.body.exampleMeal;
      //   meal.calories = req.body.calories;
      // // user.meals.push(newMeal);
      // user.save();
      res.render('meals/edit', {
        meal: mealToEdit,
        userId: req.params.userId
      });
    });
});


//======== UPDATE ========================================

//create a PUT "/:id" route that saves the changes from the meals.
router.put('/:id', function(req, res) {
        User.findById(req.params.userId)
          .exec(function(err, user) {
            if (err) { console.log(err); }
            else if (!user) {console.log('route fucked');}
            console.log(user.meals);
            var editedMeal = user.meals.id(req.params.id);
            // var thisMeal = req.params.id;
            // var meal = user.meals.find(function (meal) {
            //   return meal.id = thisMeal;
            // });
              editedMeal.name = req.body.name;
              editedMeal.imgURL = req.body.imgURL;
              editedMeal.description = req.body.description;
              editedMeal.exampleMeal = req.body.exampleMeal;
              editedMeal.calories = req.body.calories;
            // user.meals.push(newMeal);
            user.save();
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
    .exec(function(err, user) {
      user.meals.remove(mealId)
      if (err) { return console.log(err); }
    });

  Meal.findByIdAndRemove(req.params.id)
    .exec(function(err, meals){
      if (err) { return console.log(err); }
      res.redirect(`/users/${req.params.userId}`);
    });
});


// router.delete('/:id', function deleteCurrentMeal(req, res) {
//   User.findById(req.params.userId)
//     .exec(function (err, user){
//       if (err) { console.log(err); }
//       user.meals.id(req.params.id).remove();
//       user.save(function (err) {
//         if (err) console.log(err);
//         // console.log('Meal was removed')
//         res.redirect(`/users/${req.params.userId}`)
//       });
//       // res.render('project_ideas/index', {
//       //   user: user
//       });
//     });

//====== EXPORTS ===========================================
module.exports = router;
