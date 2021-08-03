const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	nickname: String,
	phone: String,
	pin: String,
	location: { type: String, default: 'noLocation' }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
