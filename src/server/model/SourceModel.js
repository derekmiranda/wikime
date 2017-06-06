const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  url: { type: String, default: ''},
  notes: { type: String, default: ''},
  topic: {
    type: mongoose.Schema.ObjectId,
    required: true,
  }
});

module.exports = mongoose.model('Source', sourceSchema);