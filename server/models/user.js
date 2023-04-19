
const mongoose = require("mongoose");

const schema = mongoose.Schema;


//USER Schema - email of the user, object user_cabs(array){source,destination,id,timestamp,price,etc}

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