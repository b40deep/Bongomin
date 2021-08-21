const postModel = require('../models/postModel');

const getPosts = async (req, res) => {
	console.log('reached getPosts');
	try {
		const allPosts = await postModel.find();
		res.status(200).json(allPosts);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const createPost = async (req, res) => {
	try {
		const newPost = new postModel(req.body);
		await newPost.save();
		res.status(201).json(newPost);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

const deletePost = async (req, res) => {
	try {
		await postModel.findByIdAndRemove(req.params.post_id);
		res.send('Successfully Deleted');
	} catch (error) {
		console.log(error);
	}
	// console.log('dummy delete_', req.params.post_id);
};

const updatePost = async (req, res) => {
	try {
		await postModel.findByIdAndUpdate(req.params.post_id, req.body);
		res.send('Successfully Updated');
	} catch (error) {
		console.log(error);
	}
	// console.log('dummy update_', req.params.post_id, req.body);
};

module.exports = { getPosts, createPost, deletePost, updatePost };
