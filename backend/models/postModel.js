const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	user: { type: String, default: 'test' },
	items: [ String ],
	type: String,
	location: { type: String, default: 'noLocation' },
	time: { type: String, default: 'noTime' }
});

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;
