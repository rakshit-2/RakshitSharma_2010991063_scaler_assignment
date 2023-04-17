
const mongoose = require("mongoose");

const schema = mongoose.Schema;

let ele = new schema({
	id:{
		type:Number
	},
	name:{
		type:String
	}
})

module.exports = mongoose.model("TEST", ele)