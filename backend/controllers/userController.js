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

	await userModel.find({ nickname: req.body.nickname }, (err, res) => {
		if (err) {
			console.log(err);
			return 'Server error';
		} else {
			//RES.PIN IS NOT WORKING - RETURNS UNDEFINED
			console.log(res, req.body.pin, res.pin);

			if (res.pin === req.body.pin) {
				console.log(`${req.body.nickname} Login successful`);
			} else {
				console.log('Login failed');
			}
		}
	});

	// try {
	// 	await userModel.exists({ nickname: req.body.nickname }, (err, res) => {
	// 		if (err) {
	// 			res.status(500).send('Server error');
	// 			console.log(err);
	// 		} else {
	// 			console.log(res);
	// 			if (!res) {
	// 				console.log('User not found');
	// 				res.send(200);
	// 			} else {
	// 				userModel.find({ nickname: req.body.nickname }, (err, res) => {
	// 					if (err) {
	// 						res.status(500).send('Server error');
	// 						console.log(err);
	// 					} else {
	// 						if (res.pin === req.body.pin) {
	// 							res.status(200).send(`${req.body.nickname} Login successful`);
	// 						} else {
	// 							res.status(500).send('Login failed');
	// 						}
	// 					}
	// 				});
	// 			}
	// 		}
	// 	});
	// } catch (error) {
	// 	res.status(500).send('Server error');
	// }
};

const deleteUser = async (req, res) => {
	try {
		await userModel.findByIdAndRemove(req.params._id);
		res.send('Successfully Deleted');
	} catch (error) {
		console.log(error);
	}
	// console.log('dummy delete_', req.params.User_id);
};

const updateUser = async (req, res) => {
	try {
		await userModel.findByIdAndUpdate(req.params._id, req.body);
		res.send('Successfully Updated');
	} catch (error) {
		console.log(error);
	}
	// console.log('dummy update_', req.params.User_id, req.body);
};

module.exports = { getUsers, loginUser, createUser, deleteUser, updateUser };
