import CourseContent from '../models/courseContentModel.js';

class CourseContentDAO {
  static async create(courseContentData) {
    try {
      const courseContent = new CourseContent(courseContentData);
      const createdCourseContent = await courseContent.save();
      return createdCourseContent;
    } catch (error) {
      throw error;
    }
  }

  static async getById(courseContentId) {
    try {
      const courseContent = await CourseContent.findById(courseContentId);
      return courseContent;
    } catch (error) {
      throw error;
    }
  }

  static async update(courseContentId, courseContentData) {
    try {
      const updatedCourseContent = await CourseContent.findByIdAndUpdate(
        courseContentId,
        courseContentData,
        { new: true }
      );
      return updatedCourseContent;
    } catch (error) {
      throw error;
    }
  }
}

export default CourseContentDAO;
