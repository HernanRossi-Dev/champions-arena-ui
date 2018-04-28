var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	userName: String,
	password: String,
	email: String,
});

module.exports = mongoose.model('users', userSchema);