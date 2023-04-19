
const mongoose = require("mongoose");

const schema = mongoose.Schema;

// CAB Schema for all the types of cabs present to pickup
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
    }
})

module.exports = mongoose.model("CABS", ele)