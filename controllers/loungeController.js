var loungeService = require ('../services/loungeService');

const createLounge = async (req,res)=>{
//post new lounge
    try {
    const response = await loungeService.createNewLounge(req.body)
      res.status(201).send({message:"Lounge created",  response})
    } catch (error) {
           console.log(error);
           res.send(error)
    }
}

//get lounges 
const getLounge = async(req,res)=>{
 try {
  const response = await loungeService.getLoungelist()
   res.send({message:"This is the list of the lounges", response})
 } catch (error) {
     res.send(error)
 } }

 //get lounge by id
 const getLoungeid = async(req,res) => {
  try {
    const response = await loungeService.getLoungebyid(req.body)
    res.status(201).send({message:"Lounge found", response })
  } catch (error) {
      res.send(error)
  }
 }

module.exports= { createLounge , getLounge, getLoungeid};