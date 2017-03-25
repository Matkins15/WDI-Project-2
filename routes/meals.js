var express = require('express');
var router = express.Router();

var Meals = require('../models/meals');
//==============================================================
// // index authors
// router.get('/', function(req, res) {
//     res.send('authors will be here');
// });
//
// module.exports = router;
//===============================================================
// Setting up the routes/author's index route to show our data
// index authors
// router.get('/', function(req, res) {
//     // res.send('authors will be here');
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
router.get('/', function(req, res) {
    // res.send('authors will be here');
    Meals.find({})
        .exec(function(err, meals) {
            if(err) console.log(err);

            console.log(meals);
            // res.send(authors);
            res.render('meals/index', {
            	  meals: meals
            });
        });
});

// show meals
router.get('/:id', function(req, res) {
    Meals.findById(req.params.id)
        .exec(function(err, meals) {
            if(err) console.log(err);

            console.log(meals);
            res.send(meals);
        });
});

module.exports = router;
