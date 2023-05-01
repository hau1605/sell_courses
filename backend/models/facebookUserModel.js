const mongoose = require('mongoose');

const facebookUserSchema = new mongoose.Schema({
  avatar: {
    type: String
  },
  date: {
    type: Date
  },
  facebookId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  idWishList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  purchasedCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  status: {
    type: Boolean,
    default: true
  },
  __v: {
    type: Number,
    default: 0
  }
});

const FacebookUser = mongoose.model('FacebookUser', facebookUserSchema);

module.exports = FacebookUser;

