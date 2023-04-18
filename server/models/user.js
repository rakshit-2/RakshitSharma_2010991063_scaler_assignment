
const mongoose = require("mongoose");

const schema = mongoose.Schema;


let ele = new schema({
	user_email:{
		type:String
	},
	user_cabs:
    {
        type:[Object],
    },
})

module.exports = mongoose.model("user", ele)