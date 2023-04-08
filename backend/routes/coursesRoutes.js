const express = require('express');
const router = express.Router();
const coursesDAO = require('../dao/coursesDAO');

// Create a new course
router.post('/', async (req, res) => {
  try {
    const newCourse = req.body;
    const createdCourse = await coursesDAO.createCourse(newCourse);
    res.status(201).json(createdCourse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all courses
router.get('/', async (req, res) => {
  try {
    const courses = await coursesDAO.getAllCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a course by ID
router.get('/:id', async (req, res) => {
  try {
    const courseId = req.params.id;
    const course = await coursesDAO.getCourseById(courseId);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a course by ID
router.put('/:id', async (req, res) => {
  try {
    const courseId = req.params.id;
    const updatedCourse = req.body;
    const course = await coursesDAO.updateCourse(courseId, updatedCourse);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ error: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a course by ID
router.delete('/:id', async (req, res) => {
  try {
    const courseId = req.params.id;
    await coursesDAO.deleteCourse(courseId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

