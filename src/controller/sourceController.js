const mongoose = require('mongoose');
const Source = require('./../model/SourceModel');

module.exports = {
  getSources: (req, res, next) => {
    const topic = req.query.topic;
    Source.find({ topic }, (err, sources) => {
      if (err) res.status(400).send(err);
      else res.json(sources);
    });
  },

  postSource: (req, res, next) => {
    
    function sendErr(err) {
      res.status(400).send(err);
    }

    const _id = req.body._id;

    const findAndUpdatePromise = new Promise((resolve, reject) => {
      Source.findOne({ _id }, (err, source) => {
        if (err) reject(err);
        else resolve(source);
      });
    });

    findAndUpdatePromise
      .then(source => {
        return new Promise((resolve, reject) => {
          console.log(source);
          // if doesn't find a source, make a new one
          if (!source) {
            Source.create(req.body, (err, created) => {
              if (err) reject(err);
              else resolve(created);
            });
          } else {
            Source.update({ _id }, req.body, (err, writeRes) => {
              if (err) reject(err);
              else resolve(source);
            });
          }
        });
      }, sendErr)
      .then(res.json.bind(res), sendErr);
  },
};