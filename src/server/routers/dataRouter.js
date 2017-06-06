const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const PORT = 4000;
const dataRouter = express.Router();

const url = 'mongodb://localhost:27017/concept-tree';
mongoose.connect(url);

// Connect to MongoDB
const db = mongoose.connection;
db.on('error', (err) => {
  throw err;
});
db.once('open', function() {
  console.log('Mongoose working!');
});

// allow CORS
dataRouter.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// middleware
dataRouter.use(bodyParser.json());
dataRouter.use(bodyParser.urlencoded());

const topicRouter = require('./topicRouter')
const sourceRouter = require('./sourceRouter')

dataRouter.use('/topic', topicRouter);
dataRouter.use('/source', sourceRouter);

module.exports = dataRouter;

// app.listen(PORT, () => console.log(`Listening on port ${PORT}`));