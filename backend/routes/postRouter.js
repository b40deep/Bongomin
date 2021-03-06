const express = require('express');
const postController = require('../controllers/postController.js');
const userController = require('../controllers/userController.js');
const postModel = require('../models/postModel.js');
const authenticate = require('../controllers/authenticate.js');

const postRouter = express.Router();

postRouter.get('/', postController.getPosts);
postRouter.post('/', authenticate.verifyUserTokenNext, postController.createPost);
postRouter.delete('/:post_id', postController.deletePost);
postRouter.put('/:post_id', postController.updatePost);
module.exports = postRouter;
