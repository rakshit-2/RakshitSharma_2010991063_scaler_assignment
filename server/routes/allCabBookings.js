const express = require("express");
const Logger=require('./../connect/logg');
const ALLBOOKING=require('./../models/allBooking');
const AllCabBooking = express.Router();

AllCabBooking.get("/get-all-cab", async (req, res) => {
    try
    {
        const ele=await ALLBOOKING.find().exec();
        res.status(200).send(ele)
    }
    catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
    
})


module.exports = AllCabBooking