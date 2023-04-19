const mongoose = require("mongoose");

const schema = mongoose.Schema;



// ALLBOOKING Schema keep record of all the booking on the webapp
let ele = new schema({
	cab_name:{
		type:String
	},
    cab_price:{
        type:Number
    },
    cab_image:{
        type:String
    },
    cab_type:{
        type:String
    },
    cab_seats:{
        type:Number
    },
    user_email:{
        type:String
    },
    booking_time:{
        type : Date, 
        default: Date.now
    }
})

module.exports = mongoose.model("ALLBOOKING", ele)