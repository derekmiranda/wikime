const mongoose = require('mongoose');
const Topic = require('./../model/TopicModel');

module.exports = {
  getTopics: (req, res, next) => {
    // if no query string
    Topic.find(req.query, (err, topics) => {
      if (err) res.status(400).send(err);
      else res.json(topics);
    });
  },

  postTopic: (req, res, next) => {
    const _id = req.body._id;
    const update = req.body;
    const options = {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    };

    const findAndUpdatePromise = new Promise((resolve, reject) => {
      Topic.findOne({ _id }, (err, topic) => {
        if (err) reject(err);
        else resolve(topic);
      });
    });

    findAndUpdatePromise

      .then(topic => {
        return new Promise((resolve, reject) => {
          // if doesn't find a topic, make a new one
          if (!topic) {
            Topic.create(req.body, (err, created) => {
              if (err) reject(err);
              else resolve(created);
            });
          } else {
            Topic.update({ _id }, req.body, (err, writeRes) => {
              if (err) reject(err);
              else resolve(topic);
            });
          }
        });
      }, sendErr)

      .then(res.json.bind(res), sendErr);

    function sendErr(err) {
      res.status(400).send(err);
    }
  },
};