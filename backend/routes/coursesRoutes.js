import express from 'express';
const router = express.Router();

import * as coursesController from '../controllers/coursesController.js';

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

export default router;
