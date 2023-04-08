const express = require('express');
const router = express.Router();
const lecturersDAO = require('../dao/lecturersDAO');

// Create a new lecturer
router.post('/', async (req, res) => {
  try {
    const newLecturer = req.body;
    const createdLecturer = await lecturersDAO.createLecturer(newLecturer);
    res.status(201).json(createdLecturer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all lecturers
router.get('/', async (req, res) => {
  try {
    const lecturers = await lecturersDAO.getAllLecturers();
    res.status(200).json(lecturers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a lecturer by ID
router.get('/:id', async (req, res) => {
  try {
    const lecturerId = req.params.id;
    const lecturer = await lecturersDAO.getLecturerById(lecturerId);
    if (lecturer) {
      res.status(200).json(lecturer);
    } else {
      res.status(404).json({ error: 'Lecturer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a lecturer by ID
router.put('/:id', async (req, res) => {
  try {
    const lecturerId = req.params.id;
    const updatedLecturer = req.body;
    const lecturer = await lecturersDAO.updateLecturer(lecturerId, updatedLecturer);
    if (lecturer) {
      res.status(200).json(lecturer);
    } else {
      res.status(404).json({ error: 'Lecturer not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a lecturer by ID
router.delete('/:id', async (req, res) => {
  try {
    const lecturerId = req.params.id;
    await lecturersDAO.deleteLecturer(lecturerId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

