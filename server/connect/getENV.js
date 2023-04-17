require('dotenv').config();

exports.db_url = process.env.MONGODB_URL;
exports.db_port = process.env.PORT;