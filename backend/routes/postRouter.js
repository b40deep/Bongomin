const express = require('express');
const postController = require('../controllers/postController.js');
const postModel = require('../models/postModel.js');

const postRouter = express.Router();

postRouter.get('/', postController.getPosts);
postRouter.post('/', postController.createPost);
module.exports = postRouter;
