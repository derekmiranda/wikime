const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  parent: mongoose.Schema.ObjectId,
});

module.exports = mongoose.model('Topic', topicSchema);