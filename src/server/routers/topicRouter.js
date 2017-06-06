const express = require('express');
const topicRouter = express.Router();
const topicController = require('./controllers/topicController');

topicRouter.get('/', topicController.getTopics);
topicRouter.post('/', topicController.postTopic);

module.exports = topicRouter;