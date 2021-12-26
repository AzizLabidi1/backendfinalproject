const express= require('express');
const router = express.Router();
var coffeshopController = require ('../controllers/coffeshopController');

console.log("coffeshop",coffeshopController)

//create coffeshops
router.route('/coffeshop').post(coffeshopController.createCoffeshop)

//get list of coffeshops
router.route('/coffeshoplist').get(coffeshopController.getCoffeshop)

// get list of coffeshops by id 
router.route('/coffeshop/filterbyid').get(coffeshopController.getCoffeshopid)
module.exports = router;