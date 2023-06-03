import express from 'express';
const router = express.Router();

import * as coursesController from '../controllers/coursesController.js';
import { createCourseContent, getCourseContentByCourseId, updateCourseContentByCourseId } from '../controllers/courseContentController.js';
  

// Define routes for courses

// Get all courses
// router.get('/', coursesController.getAllCourses);
router.get('/',coursesController.getCourses);
// Get course by ID
router.get('/:id', coursesController.getCourseById);
router.get('/name/:name', coursesController.getCourseByName);

// Create a new course
router.post('/', coursesController.createCourse);

// Update a course by ID
router.put('/:id', coursesController.updateCourse);

// Delete a course by ID
router.delete('/:id', coursesController.deleteCourse);

// Route: POST /api/course-content
// Create a new course content
router.post('/content', createCourseContent);

// Route: GET /api/course-content/:courseContentId
// Get course content by ID
router.get('/content/:courseId', getCourseContentByCourseId);

// Route: PUT /api/course-content/:courseContentId
// Update course content by ID
router.put('/content/:courseId', updateCourseContentByCourseId);

export default router;
