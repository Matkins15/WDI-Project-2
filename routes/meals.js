// REQUIREMENTS //

var express = require('express');
var router = express.Router({mergeParams: true});
var mongoose = require('mongoose');
var authHelpers = require('../helpers/auth.js');
var User = require('../models/users.js');
var Meals = require('../models/meals.js');

//===== NEW MEALS ========================================
router.get('/new', function(req, res) {
    res.render('meals/new', {

    });
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
          type: req.body.type,
          calories: req.body.calories,
          description: req.body.description,
          // created_by: req.body.created_by
    });
      newMeals.save();
      user.meals.push(newMeals);
      user.save();
      res.redirect('/user${req.params.userdId}');
    });
});

//======== EDIT MEALS ====================================
router.get('/:id/edit', function(req,res) {

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
            user: user
          });
        });
    });
});


//======== UPDATE ========================================

//create a PUT "/:id" route that saves the changes from the restaurant.
router.put('/:id', function(req, res) {
    Meals.findById(req.params.id)
        .exec(function(err, meals) {
            if (err) {
              console.log(err);
            }
          meals.name = req.body.name;
          meals.type = req.body.type;
          meals.calories = req.body.calories;
          meals.description = req.body.description;
          meals.save();
        });
    User.findById(req.params.userId)
        .exec(function(err, user) {
            if (err) { console.log(err); }
            var mealsToEdit = user.meals.id(req.params.id);
            mealsToEdit.name = req.body.name;
            mealsToEdit.type = req.body.type;
            mealsToEdit.calories = req.body.calories;
            mealsToEdit.description = req.body.description;
            user.save();
            res.redirect(`/users/${req.params.userId}`);
        });
});

//========= DELETE MEALS =================================
router.delete('/:id', function(req, res) {
    Users.findByIdAndRemove(req.params.userId, {
      $pull: {
        meals: {_id: req.params.id}
      }
    })
      .exec(function(err, author) {
          if (err) {
            console.log(err);
          }
        });
        Meals/findByIdAndRemove(req.params.id)
        .exec(function(err, meals){
          if(err){
            console.log(err);
          }
          res.redirect(`/users/${req.params.userId}`);
        });
      });

//====== EXPORTS ===========================================
module.exports = router;
