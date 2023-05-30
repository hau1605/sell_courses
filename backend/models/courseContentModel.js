import mongoose from 'mongoose';
import Course from './courseModel.js';

const courseContentSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  lesson_count: {
    type: Number,
    required: true,
  },
  lessons: [
    {
      title: {
        type: String,
        required: true,
      },
      video_url: {
        type: String,
        required: true,
      },
      thumbnail_url: {
        type: String,
        required: true,
      },
      lesson_note: {
        type: String,
      },
    },
  ],
});

const CourseContent = mongoose.model('CourseContent', courseContentSchema);

export default CourseContent;
