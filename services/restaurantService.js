const Restaurant = require('../models/Restaurants');
const mongoose= require('mongoose');

//service create new restaurant
const createNewRestaurant = async (payload ) => await Restaurant.create({...payload})

//service display list of restaurants
const getRestaurantlist = async() => await Restaurant.find()

//find restaurant by id
const getRestaurantbyid = async(payload) => await Restaurant.findById({...payload})

module.exports=  { createNewRestaurant, getRestaurantlist, getRestaurantbyid};