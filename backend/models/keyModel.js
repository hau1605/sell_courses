const mongoose = require('mongoose');

const keySchema = new mongoose.Schema({
  key: {
    type: String,
    required: true,
    unique: true,
    minlength: 16,
    maxlength: 16
  },
  remaining_use: {
    type: Number,
    required: true,
    default: 1
  }
});

const keyModel = mongoose.model('Key', keySchema);

module.exports = keyModel;

