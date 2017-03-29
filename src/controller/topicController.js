const Topic = require('./../model/TopicModel');

module.exports = {
  getTopics: (req, res, next) => {
    // if no query string
    Topic.find(req.query, (err, topics) => {
      if (err) res.status(418).send(err);
      else res.json(topics);
    });
  }
};