const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now
  },
  avatar: {
    type: String
  },
  isAuth: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  role: {
    type: String,
    required: true
  }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

