import mongoose from 'mongoose';

const lecturerSchema = new mongoose.Schema({
  date: {
    type: Date
  },
  avatar: {
    type: String,
    default: '/public/avatar/default/avatar.png'
  },
  description: {
    type: String
  },
  isAuth: {
    type: Boolean,
    default: false
  },
  status: {
    type: Boolean,
    default: true
  },
  idCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String
  },
  __v: {
    type: Number,
    default: 0
  }
});

const Lecturer = mongoose.model('Lecturer', lecturerSchema);

export default Lecturer;

