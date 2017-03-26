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

// new meals
router.get('/new', function(req, res) {
    res.render('meals/new');
});

// create meals
router.post('/', function(req, res) {
    var meals = new Meals({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        country: req.body.country,
        book_title: req.body.book_title,
        publication_year: req.body.publication_year
    });
    author.save(function(err, meals){
        if (err) { console.log(err); }

        console.log(meals);
        // res.send(author);
        res.render('meals/show', {
        	meals: meals
        });
    });
});

// edit meals
router.get('/:id/edit', function(req,res) {
    Meals.findById(req.params.id)
    .exec(function(err, meals) {
        if (err) { console.log(err); }

        res.render('meals/edit', {
            meals: meals
        });
    });
});

//show meals
router.get('/:id', function(req, res) {
    Meals.findById(req.params.id)
        .exec(function(err, meals) {
            if(err) console.log(err);

            console.log(meals);
            res.render('meals/index');
        });
});

module.exports = router;
