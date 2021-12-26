const express= require('express');
const router = express.Router();
var restaurantController = require ('../controllers/restaurantController');

console.log("restaurant",restaurantController)

//create restaurants
router.route('/restaurant').post(restaurantController.createRestaurant)

//get list of restaurants
router.route('/restaurantlist').get(restaurantController.getRestaurant)

// get list of restaurants by id 
router.route('/restaurant/filterbyid').get(restaurantController.getRestaurantid)
module.exports = router;