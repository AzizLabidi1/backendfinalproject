let mongoose = require('mongoose')
let coffeshopSchema = new mongoose.Schema({
  Name: String,
  Description: String,
  Location: String,
  Working_hours: String,
  Rate:Number
})
module.exports = mongoose.model('Coffeshop', coffeshopSchema)