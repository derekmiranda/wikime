const express = require('express');
const sourceController = require('./../controller/sourceController');

const sourceRouter = express.Router();

sourceRouter.get('/', sourceController.getSources);
sourceRouter.post('/', sourceController.postSource);

module.exports = sourceRouter;