const mongoose = require('mongoose');
const  User = require('../models/User');


//Register
const registerNewuser = async(payload) => await User.create({...payload});
//login
const loginTheuser = async(payload) => await User.findOne({...payload})

module.exports = {registerNewuser, loginTheuser};