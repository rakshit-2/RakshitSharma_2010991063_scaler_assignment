
const mongoose = require("mongoose");

const schema = mongoose.Schema;


let ele = new schema({
	user_email:{
		type:String
	},
	user_source:{
		type:String
	},
	user_destinations:{
		type:String
	},
	user_total_time:{
		type:Number
	},
	user_cab:{
		type:String
	},
	user_booking_time:{
		type:Date, 
		default:Date.now
	},

})

module.exports = mongoose.model("user", ele)