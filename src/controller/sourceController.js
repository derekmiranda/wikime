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
      console.log(req.body);
      res.status(400).send(err);
    }

    const name = req.body.name;

    const findAndUpdatePromise = new Promise((resolve, reject) => {
      Source.findOne({ name }, (err, source) => {
        if (err) reject(err);
        else resolve(source);
      });
    });

    findAndUpdatePromise
      .then(source => {
        return new Promise((resolve, reject) => {
          // if doesn't find a source, make a new one
          if (!source) {
            Source.create(req.body, (err, created) => {
              if (err) reject(err);
              else resolve(created);
            });
          } else {
            Source.update({ name }, req.body, (err, writeRes) => {
              if (err) reject(err);
              else resolve(source);
            });
          }
        });
      }, sendErr)
      .then(res.json.bind(res), sendErr);
  },
};