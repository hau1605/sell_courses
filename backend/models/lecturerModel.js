import mongoose from 'mongoose';

const lecturerSchema = new mongoose.Schema({
  avatar: {
    type: String,
    default: '/public/avatar/default/avatar.png'
  },
  description: {
    type: String
  },
  idCourses: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course'
  }],
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String
  }
});

const Lecturer = mongoose.model('Lecturer', lecturerSchema);

export default Lecturer;

