const express = require("express");
const Logger=require('./../connect/logg');
const ALLBOOKING=require('./../models/allBooking');
const AllCabBooking = express.Router();

AllCabBooking.post("/add-cab", async (req, res) => {
    try
    {
        var email=req.body.email;
        
    }
    catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
    
})


module.exports = AllCabBooking