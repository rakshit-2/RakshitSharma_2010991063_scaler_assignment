
const mongoose = require("mongoose");

const schema = mongoose.Schema;

// let ele = new schema({
// 	user_updated:{
// 		type:Boolean
// 	},
// 	user_name:{
// 		type:String
// 	},
	// user_email:{
	// 	type:String
	// },
// 	user_pass:{
// 		type:String
// 	},
// 	user_age:{
// 		type:String
// 	},
// 	user_gender:{
// 		type:String
// 	},
// 	user_contact:{
// 		type:String
// 	},
// 	user_religion:{
// 		type:String
// 	},
// 	user_country:{
// 		type:String
// 	},
// 	user_state:{
// 		type:String
// 	},
// 	user_height:{
// 		type:String
//     },
// 	user_edu:{
// 		type:String
// 	},
// 	user_occu:{
// 		type:String
// 	},
// 	user_sallary:{
// 		type:String
// 	},
// 	user_marstat:{
// 		type:String
// 	},
// 	user_image:{
// 		type:String
// 	},
// 	user_pack:{
// 		type:String
// 	},
// 	user_address:{
// 		type:String
// 	},
// 	user_hobby:{
// 		type:String
// 	},
// 	user_about:{
// 		type:String
// 	},
// 	user_zodiac:{
// 		type:String
// 	},
// 	user_dob:{
// 		type:String
// 	},
// 	user_motherTongue:{
// 		type:String
// 	},
// 	user_secLang:{
// 		type:String
// 	},
// 	user_count:{
// 		type:Number
// 	},
// 	user_send:
//     {
//         type:[Object],
//     },
//     user_recieve:
//     {
//         type:[Object],
//     },
//     user_accepted:
//     {
//         type:[Object],
//     }
    
// })


let ele = new schema({
	user_email:{
		type:String
	},
	user_source:{
		type:String
	},
	user_destinations:{
		
	}
})

module.exports = mongoose.model("user", ele)