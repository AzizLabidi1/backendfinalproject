const express= require('express');
const router = express.Router();
var loungeController = require ('../controllers/loungeController');

console.log("lounge",loungeController)

//create lounges
router.route('/lounge').post(loungeController.createLounge)

//get list of lounges
router.route('/loungelist').get(loungeController.getLounge)

// get list of lounges by id 
router.route('/lounge/filterbyid').get(loungeController.getLoungeid)
module.exports = router;