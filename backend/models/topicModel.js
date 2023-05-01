const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
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
  },
  idCourseCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;

