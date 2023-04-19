const express = require("express");
const Logger=require('./../connect/logg');
const ALLBOOKING=require('./../models/allBooking');
const AllCabBooking = express.Router();


// get-all-cab route fetch all the cab bookings till the latest time for the admin
AllCabBooking.get("/get-all-cab", async (req, res) => {
    try
    {
        //fetching all the field in the schem for display
        const ele=await ALLBOOKING.find().exec();
        Logger.Logg.success("allbooking fetch SUCCESS")
        res.status(200).send(ele)
    }
    catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
    
})


module.exports = AllCabBooking