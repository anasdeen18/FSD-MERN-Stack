// import the mongoose
var mongoose = require("mongoose");

//schema creation
var userSchema = mongoose.Schema({
  name:String,
  age:Number,
  place:String,
});
//var userModel = mongoose.model("collectionName",Schema name)
var userModel = mongoose.model("user", userSchema);
module.exports = userModel;