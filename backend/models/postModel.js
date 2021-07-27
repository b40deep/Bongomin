const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
	user_id: { type: Number, default: 024 },
	post_id: Number,
	items: [ String ],
	type: String,
	location: { type: String, default: 'noLocation' },
	time: { type: String, default: 'noTime' }
});

const postModel = mongoose.model('post', postSchema);

module.exports = postModel;
