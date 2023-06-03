import mongoose from 'mongoose';
import Course from './courseModel.js';

const courseContentSchema = new mongoose.Schema({
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
    description: 'ID khóa học',
  },
  lesson_count: {
    type: Number,
    required: true,
    description: 'Số lượng khóa học',
  },
  content: [
    {
      title: {
        type: String,
        required: true,
        description: 'Tiêu đề video',
      },
      video_url: {
        type: String,
        required: true,
        description: 'Liên kết video',
      },
      thumbnail_url: {
        type: String,
        required: true,
        description: 'Thumbnail của video',
      },
      lesson_note: {
        type: String,
        description: 'Ghi chú bài giảng',
      },
    },
  ],
});

const CourseContent = mongoose.model('CourseContent', courseContentSchema);

export default CourseContent;
