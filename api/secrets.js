require('dotenv').config();

module.exports = {
	jwtSecret: process.env.JWT_SECRET || "Milk was a bad choice"
}