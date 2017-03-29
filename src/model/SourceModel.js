const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  url: String,
  notes: String,
  topic: mongoose.Schema.ObjectId,
});

module.exports = mongoose.model('Source', sourceSchema);