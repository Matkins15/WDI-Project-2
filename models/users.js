var Schema = require('../db/schema');
var mongoose = require('mongoose');

var User = Schema.User;
module.exports = User;

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
//
// mongoose.promise = global.Promise;
//
// var UsersSchema = new Schema({
//   email: {type: String, required: true, unique: true},
//   password_digest: String,
//   firstName: String,
//   lastName: String,
//   age: Number,
//   weight: Number,
//   created_at: Date,
//   updated_at: Date
// });
//
// UsersSchema.pre('save', function(next){
//     now = new Date();
//     this.updated_at = now;
//     if ( !this.created_at ) {
//         this.created_at = now;
//     }
//     next();
// });
//
// // UsersSchema.virtual('fullName').get(function () {
// //     return this.first_name + ' ' + this.last_name;
// // });
//
// module.exports = mongoose.model("Users", UsersSchema);
