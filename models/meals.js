
var Schema = require('../db/schema');
var mongoose = require('mongoose');


var Meals = Schema.Meals;
module.exports = Meals;

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
// mongoose.promise = global.Promise;
//
// var MealsSchema = new Schema({
//     name: String,
//     description: String,
//     exampleMeal: String,
//     calories: String,
//     image: String
// });
//
// MealsSchema.pre('save', function(next){
//     now = new Date();
//     this.updated_at = now;
//     if ( !this.created_at ) {
//         this.created_at = now;
//     }
//     next();
// });
//
// // MealsSchema.virtual('fullName').get(function () {
// //     return this.first_name + ' ' + this.last_name;
// // });
//
// // var MealsModel = mongoose.model("Meals", MealsSchema);
//
// module.exports = mongoose.model("Meals", MealsSchema);
//
// // module.exports = {
// //   Meals: MealsModel
// // }
