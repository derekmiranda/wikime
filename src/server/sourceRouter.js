const express = require('express');
const sourceRouter = express.Router();

sourceRouter.get('/', (req, res) => {
  res.send('We gotta hack the source code!')
});

module.exports = sourceRouter;