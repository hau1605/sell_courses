const mongoose = require('mongoose');

const topWeekSchema = new mongoose.Schema({
  nameTopCourses: [{
    type: String
  }],
  idTopCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  nameTopCategories: [{
    type: String
  }],
  idTopCategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  name: {
    type: String
  },
  __v: {
    type: Number,
    default: 0
  }
});

const TopWeek = mongoose.model('TopWeek', topWeekSchema);

module.exports = TopWeek;

