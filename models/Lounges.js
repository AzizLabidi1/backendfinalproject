let mongoose = require('mongoose')
let loungeSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Location: String,
  Working_hours: String,
  Rate:Number
})
module.exports = mongoose.model('Lounge', loungeSchema)