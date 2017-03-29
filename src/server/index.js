const express = require('express');
const mongoose = require('mongoose');
const topicController = require('../controller/topicController');

const PORT = 3000;
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

app.use(express.static(__dirname +'./../')); //serves the index.html

const topicRouter = express.Router();
const sourceRouter = express.Router();

topicRouter.get('/', topicController.getTopics);

sourceRouter.get('/', (req, res) => {
  res.send('We gotta hack the source code!')
});

app.use('/topic', topicRouter);
app.use('/source', sourceRouter);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));