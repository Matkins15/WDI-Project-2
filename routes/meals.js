var express = require('express');
var router = express.Router();

var Meals = require('../models/meals');
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
router.get('/', function(req, res) {
    // res.send('meals will be here');
    Meals.find({})
        .exec(function(err, meals) {
            if(err) console.log(err);

            console.log(meals);
            // res.send(meals);
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
        // res.send(meals);
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

// update meals
router.patch('/:id', function(req, res) {
    Meals.findByIdAndUpdate(req.params.id, {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        country: req.body.country,
        book_title: req.body.book_title,
        publication_year: req.body.publication_year
    }, { new: true })
        .exec(function(err, author) {
            if (err) { console.log(err); }

            console.log(meals);
            // res.send(meals);
            res.render('meals/show', {
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

// delete meals
router.delete('/:id', function(req, res) {
    Meals.findByIdAndRemove(req.params.id)
        .exec(function(err, author) {
            if (err) { console.log(err); }

            console.log('Meals deleted.');
            // res.send('Meals deleted.');
            //redirects back to the index route
            res.redirect('/meals');
        });
});

module.exports = router;
