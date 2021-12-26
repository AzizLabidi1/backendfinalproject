const express = require('express')
const router = express.Router();
var userController = require ('../controllers/userController');


//register
router.route('/register').post(userController.registerUser);
//login
router.route('/login').post(userController.loginUser)



module.exports = router;