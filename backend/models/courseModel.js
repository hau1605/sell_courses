import mongoose from 'mongoose';
import Lecturer from './lecturerModel.js';

const courseSchema = new mongoose.Schema({
  poster: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  numberOfView: {
    type: Number,
    default: 0
  },
  cost: {
    type: Number,
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now
  },
  whatYoullLearn: {
    type: [String],
    default: []
  },
  name: {
    type: String,
    required: true
  },
  categories: {
    type: String,
    required: true
  },
  idLecturer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Lecturer',
    required: true
  }
});

const Course = mongoose.model('Course', courseSchema);

export default Course;

