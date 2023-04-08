const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  numberOfView: {
    type: Number,
    default: 0
  },
  numberOfSignUp: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    required: true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;

