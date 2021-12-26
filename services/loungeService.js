const Lounge = require('../models/Lounges');
const mongoose= require('mongoose');

//service create new Lounge
const createNewLounge = async (payload ) => await Lounge.create({...payload})

//service display list of lounges
const getLoungelist = async() => await Lounge.find()

//find lounge by id
const getLoungebyid = async(payload) => await Lounge.findById({...payload})

module.exports=  { createNewLounge, getLoungelist, getLoungebyid};