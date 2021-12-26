var express = require('express');
var mongoose = require('mongoose');
const dotenv = require("dotenv").config({ path: "./config/.env"});
var cors = require ('cors');
var {router} = require ("express");
var bodyParser = require('body-parser')

var userroutes = require ('./routes/userRoute');
var restaurantroutes = require ('./routes/restaurantRoute');
var loungeroutes = require ('./routes/loungeRoute')
var coffeshoproutes = require ('./routes/coffeshopRoute')

const app = express();
var jsonParser = bodyParser.json()
// parse application/json
app.use(bodyParser.json())

//starting the server
var server = app.listen( 5000, () => {
    console.log('Server is started on localhost:'+ (5000))
  })

//database connection
mongoose.connect(process.env.MONGO_URI,{useNewUrlParser: true, useUnifiedTopology: true}, (err)=> err ? console.error(err): console.log("connected to the database"))

// Routes 
app.use('/users',jsonParser,userroutes);
app.use('/restaurants',jsonParser,restaurantroutes);
app.use('/lounges',jsonParser,loungeroutes);
app.use('/coffeshops',jsonParser, coffeshoproutes);

//start the CRUD
app.use(express.json());
app.use(cors())
