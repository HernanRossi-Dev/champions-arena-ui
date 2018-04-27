var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	userName: String,
	password: String,
	email: String,
});

module.exports = mongoose.model('Users', UserSchema);