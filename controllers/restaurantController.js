var restaurantService = require ('../services/restaurantService');

const createRestaurant = async (req,res)=>{
//post new restaurant
    try {
    const response = await restaurantService.createNewRestaurant(req.body)
      res.status(201).send({message:"Restaurant created",  response})
    } catch (error) {
           console.log(error);
           res.send(error)
    }
}

//get restaurants 
const getRestaurant = async(req,res)=>{
 try {
  const response = await restaurantService.getRestaurantlist()
   res.send({message:"This is the list of the restaurants", response})
 } catch (error) {
     res.send(error)
 } }

 //get restaurant by id
 const getRestaurantid = async(req,res) => {
  try {
    const response = await restaurantService.getRestaurantbyid(req.body)
    res.status(201).send({message:"Restaurant found", response })
  } catch (error) {
      res.send(error)
  }
 }

module.exports= { createRestaurant , getRestaurant, getRestaurantid};