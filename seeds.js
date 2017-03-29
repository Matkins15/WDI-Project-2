var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/WDI-project-2');
var Meals = require('./models/meals');
var User = require('./models/users');

mongoose.Promise = global.Promise;

// // Connect to database
// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI);
// }
// else {
//   mongoose.connect('mongodb://localhost/WDI-project-2');
// }
// mongoose.connection.on('error', function(err) {
//   console.error('MongoDB connection error: ' + err);
//   process.exit(-1);
//   }
// );
// mongoose.connection.once('open', function() {
//   console.log("Mongoose has connected to MongoDB!");
// });

// var mealNumOne = new Meals({
//     name: 'Breakfast',
//     description: 'Break the overnight fast, curb your appetite and kick start your metabolism with a meal rich in protein, antioxidants, and complex carbohydrates.',
//     exampleMeal: '3 egg whites / 1 whole egg / 1 cup of oatmeal / 1/2 cup of strawberries',
//     calories: '300 - 500',
//     imgURL: 'https://source.unsplash.com/m0YBwXQRdkg'
// });
//
//
// var mealNumTwo = new Meals({
//     name: 'Lunch',
//     description: 'Ever tried coding on an empty stomach? No bueno. Provide your body and mind the nourishments it needs to perform at an optimum level.',
//     exampleMeal: '4oz salmon / 1/2 cup cooked brown rice / 1 cup of brocolli',
//     calories: '400 - 600',
//     imgURL: 'https://source.unsplash.com/lQy6mHZ7fYk'
// });
//
// var mealNumThree = new Meals({
//     name: 'Dinner',
//     description: 'Want to help prevent a bad nights sleep? Eat Dinner! This important meal will steady the release of glucose into your blood stream preventing disturbance in your sleep.',
//     exampleMeal: '6oz of chicken / 1 cup cubed sweet potatoes / 2 cups spinach',
//     calories: '400 - 600',
//     imgURL: 'https://source.unsplash.com/0VRwj7rYnQI'
// });
//
// var mealNumFour = new Meals({
//     name: 'Snacks',
//     description: '"Snacking" helps to prevent yourself from overeating during your next meal.',
//     exampleMeal: 'Apple with 2 Tbs of peanut butter OR 1 serving of nuts OR carrots with 2-3 Tbs of hummus ',
//     calories: '200 - 300',
//     imgURL: 'https://source.unsplash.com/evsoUV1EyXY'
// });

// mealNumOne.save(function(err) {
//   if (err) console.log(err);
//
//   console.log('mealNumOne created!');
// });
//
// mealNumTwo.save(function(err) {
//   if (err) console.log(err);
//
//   console.log('mealNumTwo created!');
// });
//
// mealNumThree.save(function(err) {
//   if (err) console.log(err);
//
//   console.log('mealNumThree created!');
// });
//
// mealNumFour.save(function(err) {
//   if (err) console.log(err);
//
//   console.log('mealNumFour created!');
// });
