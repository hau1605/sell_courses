import express from 'express';
import CourseContentController from '../controllers/courseContentController.js';

const router = express.Router();

// Route: POST /api/course-content
// Create a new course content
router.post('/', CourseContentController.createCourseContent);

// Route: GET /api/course-content/:courseContentId
// Get course content by ID
router.get('/:courseContentId', CourseContentController.getCourseContentById);

// Route: PUT /api/course-content/:courseContentId
// Update course content by ID
router.put('/:courseContentId', CourseContentController.updateCourseContent);

// Route: DELETE /api/course-content/:courseContentId
// Delete course content by ID
router.delete('/:courseContentId', CourseContentController.deleteCourseContent);

export default router;

