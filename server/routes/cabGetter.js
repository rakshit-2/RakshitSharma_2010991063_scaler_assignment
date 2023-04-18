const express = require("express");
const Logger=require('./../connect/logg');
const CABS=require('./../models/Cabs');
const cabGetter = express.Router();

cabGetter.get("/fetch-cab", async (req, res) => {
    try
    {
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