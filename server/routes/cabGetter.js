const express = require("express");
const Logger=require('./../connect/logg');
const CABS=require('./../models/Cabs');
const cabGetter = express.Router();


//fetch-cab fetches all the cab details from the schema 
//total of 5 cabs are there for the user's to choose from
cabGetter.get("/fetch-cab", async (req, res) => {
    try
    {
        //fetches all the cab's and display with price/min according to the journey in front-end
        const ele=await CABS.find().exec();
        res.status(200).send(ele)
    }
    catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
    
})


module.exports = cabGetter