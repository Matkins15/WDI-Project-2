var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

var MealsSchema = new Schema({
    name: String,
    description: String,
    exampleMeal: String,
    calories: String,
    image: String
});

var UsersSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password_digest: String,
  firstName: String,
  lastName: String,
  age: Number,
  weight: Number,
  meals: [MealsSchema],
  created_at: Date,
  updated_at: Date
});

UsersSchema.pre('save', function(next) {
  now = new Date();
  this.updated_at = now;

  if (!this.created_at) { this.created_at = now }
  next();
});

var MealsModel = mongoose.model('Meals', MealsSchema);
var UserModel = mongoose.model('User', UsersSchema);


//your code

//export below
module.exports = {
  Meals: MealsModel,
  User: UserModel
};
