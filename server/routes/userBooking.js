const express = require("express");
const Logger=require('./../connect/logg');
const USER=require('./../models/user');
const ALLBOOKING=require('./../models/allBooking');
const userBooking = express.Router();
const nodemailer=require("nodemailer");
const db_elements = require("./../connect/getENV");

var transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:db_elements.db_email,
        pass:db_elements.dp_email_pass
    }
})


const dateObject = new Date();

userBooking.post("/update-user-booking", async (req, res) => {
    var email=req.body.email;
    var cab_obj=req.body.obj;
    const hours=dateObject.getHours();
    const minutes=dateObject.getMinutes();
    const seconds=dateObject.getSeconds();
    const date=(`0 ${dateObject.getDate()}`).slice(-2);
    const month=(`0 ${dateObject.getMonth()+1}`).slice(-2);
    const year=dateObject.getFullYear();
    var timestamp=`${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
    cab_obj["booking_time"]=timestamp
    cab_obj["user_journey_time"]=req.body.total_time
    cab_obj["user_total_price"]=req.body.total_price
    cab_obj["user_source"]=req.body.source
    cab_obj["user_destinations"]=req.body.dest
    try
    {
        const ele1=await USER.findOne({user_email:email}).exec();
        if(ele1===null)
        {
            const ele=await USER.insertMany([
            {
                user_email:email
            }]);
            const check_email1 = { user_email: email };
			const check_update1= 
			{ $push: 
				{ user_cabs: cab_obj } 
			}
            const ele3=await USER.findOneAndUpdate(check_email1,check_update1);

            const ele4=await ALLBOOKING.insertMany([
            {
                cab_name:cab_obj["cab_name"],
                cab_price:cab_obj["user_total_price"],
                cab_image:cab_obj["cab_image"],
                cab_type:cab_obj["cab_type"],
                cab_seats:cab_obj["cab_seats"],
                user_email:email
            }]);

            

            console.log(email)
            var mailOptions={
                from:db_elements.db_email,
                to:email,
                subject:"Booking Confirmed!!",
                text:`Booking Confirmed ${cab_obj["cab_name"]}`
            }

            transporter.sendMail(mailOptions,function(error,info){
                if(error)
                {
                    console.log(error);
                }
                else
                {
                    console.log("email sent"+info.response)
                }
            })

            res.status(200).send({message:"InsertUpdateSuccess",data:email})
        }
        else
        {
            const check_email1 = { user_email: email };
			const check_update1= 
			{ $push: 
				{ user_cabs: cab_obj } 
			}
            const ele3=await USER.findOneAndUpdate(check_email1,check_update1);

            const ele4=await ALLBOOKING.insertMany([
            {
                cab_name:cab_obj["cab_name"],
                cab_price:cab_obj["user_total_price"],
                cab_image:cab_obj["cab_image"],
                cab_type:cab_obj["cab_type"],
                cab_seats:cab_obj["cab_seats"],
                user_email:email
            }]);

            console.log(email)
            var mailOptions={
                from:db_elements.db_email,
                to:email,
                subject:"Cab Booking Confirmed!!",
                text:`Booking Confirmed ${cab_obj["cab_name"]},\n Total price of Trip = Rs${cab_obj["user_total_price"]}/-only,\n User Email: ${email},\n date&time : ${cab_obj["booking_time"]}`
            }

            transporter.sendMail(mailOptions,function(error,info){
                if(error)
                {
                    console.log(error);
                }
                else
                {
                    console.log("email sent"+info.response)
                }
            })
            res.status(200).send({message:"UpdateSuccess",data:email})
        }
        
    }
    catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})







userBooking.get("/user/get-data", async (req, res) => {
	try 
	{
        const ele=await USER.find().exec();
		
        if(ele!==null)
		{
			res.status(200).send({message:"fetchSuccess",data:ele});
			Logger.Logg.success("userFetchSuccess")
		}
		else
		{
			Logger.Logg.error("userFetchFailed")
			res.status(200).send({message:"fetchFailed",data:{}});
		}
    }
	catch (error) 
	{
		Logger.Logg.error(error.message)
        res.status(404).json({message:error.message});
    }
})


module.exports = userBooking