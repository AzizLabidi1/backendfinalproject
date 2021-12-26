var coffeshopService = require ('../services/coffeshopService');

const createCoffeshop = async (req,res)=>{
//post new coffeshop
    try {
    const response = await coffeshopService.createNewCoffeshop(req.body)
      res.status(201).send({message:"Coffeshop created",  response})
    } catch (error) {
           console.log(error);
           res.send(error)
    }
}

//get Coffeshops 
const getCoffeshop = async(req,res)=>{
 try {
  const response = await coffeshopService.getCoffeshoplist()
   res.send({message:"This is the list of the coffeshops", response})
 } catch (error) {
     res.send(error)
 } }

 //get Coffeshop by id
 const getCoffeshopid = async(req,res) => {
  try {
    const response = await coffeshopService.getCoffeshopbyid(req.body)
    res.status(201).send({message:"Coffeshop found", response })
  } catch (error) {
      res.send(error)
  }
 }

module.exports= { createCoffeshop , getCoffeshop, getCoffeshopid};