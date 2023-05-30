import CourseContentDAO from '../dao/courseContentDAO.js';

class CourseContentController {
  static async createCourseContent(req, res) {
    try {
      const courseContentData = req.body;
      const createdCourseContent = await CourseContentDAO.create(courseContentData);
      res.status(201).json(createdCourseContent);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create course content.' });
    }
  }

  static async getCourseContentById(req, res) {
    try {
      const { courseContentId } = req.params;
      const courseContent = await CourseContentDAO.getById(courseContentId);
      if (courseContent) {
        res.json(courseContent);
      } else {
        res.status(404).json({ error: 'Course content not found.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to get course content.' });
    }
  }

  static async updateCourseContent(req, res) {
    try {
      const { courseContentId } = req.params;
      const courseContentData = req.body;
      const updatedCourseContent = await CourseContentDAO.update(courseContentId, courseContentData);
      if (updatedCourseContent) {
        res.json(updatedCourseContent);
      } else {
        res.status(404).json({ error: 'Course content not found.' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update course content.' });
    }
  }

  static async deleteCourseContent(req, res) {
    try {
      const { courseContentId } = req.params;
      await CourseContentDAO.delete(courseContentId);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete course content.' });
    }
  }
}

export default CourseContentController;

