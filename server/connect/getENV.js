require('dotenv').config();

// fetching all the Environment variables
exports.db_url = process.env.MONGODB_URL;
exports.db_port = process.env.PORT;
exports.db_email = process.env.GMAIL;
exports.dp_email_pass = process.env.PASS;