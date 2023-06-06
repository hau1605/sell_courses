import CourseContent from '../models/courseContentModel.js';

// Create new course_content
async function createCourseContent(courseContentData){
  try {
    const newCourseContent = new CourseContent(courseContentData);
    return await newCourseContent.save();
  } catch (error) {
    throw new Error('Failed to create course content');
  }
}

// Get course_content by course_id
async function getCourseContentByCourseId(courseId){
  try {
    return await CourseContent.findOne({ course_id: courseId });
  } catch (error) {
    throw new Error('Failed to get course content');
  }
}

// Update course_content by course_id
async function updateCourseContentByCourseId(courseId, lesson_count, content){
  try {
    return await CourseContent.findOneAndUpdate(
      { course_id: courseId },
      { lesson_count, content },
      { new: true }
    );
  } catch (error) {
    throw new Error('Failed to update course content');
  }
}
export {
  createCourseContent, getCourseContentByCourseId, updateCourseContentByCourseId
}
