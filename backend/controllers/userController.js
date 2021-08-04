const userModel = require('../models/userModel');

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
		const newUser = new userModel(req.body);
		await newUser.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

const loginUser = async (req, res) => {
	let userFound = false;
	// console.log(req.body.nickname, req.body);
	await userModel.find({ nickname: req.body.nickname }, (err, resp) => {
		if (err) {
			// console.log(err);
			return res.json({ response: 'Server error' });
		} else {
			//RES.PIN IS NOT WORKING - RETURNS UNDEFINED
			// console.log(resp);
			if (resp != '') {
				if (resp[0].pin === req.body.pin) {
					// console.log(`${req.body.nickname} Login successful`);
					return res.json({ response: 'loginSuccess' });
				} else {
					// console.log('Login failed');
					return res.json({ response: 'loginFailure' });
				}
			} else {
				return res.json({ response: 'noUser' });
			}
		}
	});
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
