const express = require('express');
const userController = require('../controllers/userController.js');
const userModel = require('../models/userModel.js');
const authenticate = require('../controllers/authenticate.js');

const userRouter = express.Router();

userRouter.get('/', userController.getUsers);
userRouter.post('/', authenticate.verifyUserToken);
userRouter.post('/login', userController.loginUser);
userRouter.post('/signup', userController.createUser);
userRouter.delete('/:user_id', userController.deleteUser);
userRouter.put('/:user_id', userController.updateUser);
module.exports = userRouter;
