// REQUIREMENTS //

var express = require('express');
var router = express.Router({mergeParams: true});
var mongoose = require('mongoose');
var authHelpers = require('../helpers/auth.js');
var User = require('../models/users.js');
var Meals = require('../models/meals.js');
//==============================================================
// // index meals
// router.get('/', function(req, res) {
//     res.send('meals will be here');
// });
//
// module.exports = router;
//===============================================================
// Setting up the routes/Meals' index route to show our data
// index meals
// router.get('/', function(req, res) {
//     // res.send('meals will be here');
//     Meals.find({})
//         .exec(function(err, meals) {
//             if(err) console.log(err);
//
//             console.log(meals);
//             res.send(meals);
//         });
// });
//
// module.exports = router;
// update index to render meals in browser
// index meals
// router.get('/', function(req, res) {
//     // res.send('meals will be here');
//     Meals.find({})
//         .exec(function(err, meals) {
//             if(err) console.log(err);
//
//             console.log(meals);
//             // res.send(meals);
//             res.render('meals/index', {
//             	  meals: meals
//             });
//         });
// });

//===== NEW MEALS ========================================
router.get('/new', function(req, res) {
    res.render('meals/new');
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
          allergies: req.body.allergies,
          created_by: req.body.created_by
    });
      newMeals.save();
      user.meals.push(newMeals);
      user.save();
      res.redirect('/user${req.params.userdId}');
    });
});

//======== EDIT MEALS ====================================
router.get('/:id/edit', function(req,res) {

    Meals.findById(req.params.userId)
    .exec(function(err, meals) {
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
        .exec(function(err, restaurant) {
            if (err) {
              console.log(err);
            }
          meals.name = req.body.name;
          meals.type = req.body.type;
          meals.calories = req.body.calories;
          meals.allergies = req.body.allergies;
          meals.created_by = req.body.created_by;
          meals.save();
        });
    User.findById(req.params.userId)
        .exec(function(err, user) {
            if (err) { console.log(err); }
            var mealsToEdit = users.meals.id(req.params.id);
            mealsToEdit.name = req.body.name;
            mealsToEdit.type = req.body.type;
            mealsToEdit.calories = req.body.calories;
            mealsToEdit.allergies = req.body.allergies;
            mealsToEdit.created_by = req.body.created_by;
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
