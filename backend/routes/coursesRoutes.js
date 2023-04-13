const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/coursesController');

// Define routes for courses

// Get all courses
// router.get('/', coursesController.getAllCourses);
router.get('/',coursesController.getCourses);
// Get course by ID
router.get('/:id', coursesController.getCourseById);

// Create a new course
router.post('/', coursesController.createCourse);

// Update a course by ID
router.put('/:id', coursesController.updateCourse);

// Delete a course by ID
router.delete('/:id', coursesController.deleteCourse);

module.exports = router;

