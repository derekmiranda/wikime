const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const PORT = 4000;
const app = express();

const url = 'mongodb://localhost:27017/concept-tree'
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
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

const topicRouter = require('./topicRouter')
const sourceRouter = require('./sourceRouter')

app.use('/topic', topicRouter);
app.use('/source', sourceRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));