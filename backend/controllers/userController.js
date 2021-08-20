const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const getUsers = async (req, res) => {
	try {
		const allUsers = await userModel.find();
		res.status(200).json(allUsers);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

const createUser = async (req, res) => {
	try {
		const hashedPin = await bcrypt.hash(req.body.pin, 10);
		const newUser = new userModel({
			nickname: req.body.nickname,
			phone: req.body.phone,
			pin: hashedPin,
			location: req.body.location
		});
		// console.log(newUser);
		await newUser.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

const loginUser = async (req, res) => {
	let user = null;
	// console.log(req.body.nickname, req.body);
	await userModel.find({ nickname: req.body.nickname }, (err, resp) => {
		if (err) {
			// console.log(err);
			return res.json({ response: 'Server error' });
		} else {
			user = resp[0];
		}
	});

	// console.log(user);
	if (user != '') {
		try {
			(await bcrypt.compare(req.body.pin, user.pin))
				? res.json({ response: 'loginSuccess' })
				: res.json({ response: 'loginDenied' });
		} catch (error) {
			return res.json({ response: 'Server Error' });
		}
	} else {
		return res.json({ response: 'noUser' });
	}
};

const deleteUser = async (req, res) => {
	try {
		await userModel.findByIdAndRemove(req.params._id);
		return res.json({ response: 'Successfully Deleted' });
	} catch (error) {
		console.log(error);
	}
	// console.log('dummy delete_', req.params.User_id);
};

const updateUser = async (req, res) => {
	try {
		await userModel.findByIdAndUpdate(req.params._id, req.body);
		return res.json({ response: 'Successfully Updated' });
	} catch (error) {
		console.log(error);
	}
	// console.log('dummy update_', req.params.User_id, req.body);
};

module.exports = { getUsers, loginUser, createUser, deleteUser, updateUser };
