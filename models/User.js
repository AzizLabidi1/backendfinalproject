let mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email:String,
  phone:Number,
  password:String
})
module.exports = mongoose.model('User', userSchema)