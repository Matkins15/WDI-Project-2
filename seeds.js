var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WDI-project-2');
var Meals = require('./models/meals');
var User = require('./models/users');

mongoose.Promise = global.Promise;

Meals.remove({}, function(err) {
    console.log(err);
});

var mealNumOne = new Meals({
    name: 'Meal One',
    type: 'For the Athlete',
    calories: '3000',
    allergies: 'Peanuts, Almonds',
    created_by: 'Matthew Atkins'
});

var mealNumTwo = new Meals({
    name: 'Meal Two',
    type: 'For the 9-5er',
    calories: '2100',
    allergies: 'Peanuts, Almonds',
    created_by: 'Matthew Atkins'
});

var mealNumThree = new Meals({
    name: 'Meal Three',
    type: 'Somewhat Active',
    calories: '2500',
    allergies: 'Peanuts, Almonds',
    created_by: 'Matthew Atkins'
});

var mealNumFour = new Meals({
    name: 'Meal Four',
    type: 'Gamer',
    calories: '2000',
    allergies: 'Peanuts, Almonds',
    created_by: 'Matthew Atkins'
});

mealNumOne.save(function(err) {
  if (err) console.log(err);

  console.log('mealNumOne created!');
});

mealNumTwo.save(function(err) {
  if (err) console.log(err);

  console.log('mealNumTwo created!');
});

mealNumThree.save(function(err) {
  if (err) console.log(err);

  console.log('mealNumThree created!');
});

mealNumFour.save(function(err) {
  if (err) console.log(err);

  console.log('mealNumFour created!');
});
