const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  gender: {
    type: String
  },
  date: {
    type: Date
  },
  avatar: {
    type: String
  },
  isAuth: {
    type: Boolean
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  otpNumber: {
    type: String
  },
  __v: {
    type: Number,
    default: 0
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
    type: Boolean
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;

