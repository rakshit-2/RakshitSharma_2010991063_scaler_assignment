
const mongoose = require("mongoose");

const schema = mongoose.Schema;


//TEST schema for Testing connection with Mongodb 
let ele = new schema({
	id:{
		type:Number
	},
	name:{
		type:String
	}
})

module.exports = mongoose.model("TEST", ele)