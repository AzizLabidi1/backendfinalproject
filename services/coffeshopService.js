const Coffeshop = require('../models/Coffeshops');
const mongoose= require('mongoose');

//service create new Coffeshop
const createNewCoffeshop = async (payload ) => await Coffeshop.create({...payload})

//service display list of coffeshop
const getCoffeshoplist = async() => await Coffeshop.find()

//find Coffeshop by id
const getCoffeshopbyid = async(payload) => await Coffeshop.findById({...payload})

module.exports =  { createNewCoffeshop, getCoffeshoplist, getCoffeshopbyid};