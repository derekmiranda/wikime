const express = require('express');
const topicRouter = express.Router();
const topicController = require('../controller/topicController');

topicRouter.get('/', topicController.getTopics);
topicRouter.post('/', topicController.postTopic);

module.exports = topicRouter;