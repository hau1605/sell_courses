import express from 'express';
const router = express.Router();

import * as lecturersController from '../controllers/lecturersController.js';

// Route to get all lecturers
router.get('/', lecturersController.getAllLecturers);

// Route to get a lecturer by ID
router.get('/:id', lecturersController.getLecturerById);

// Route to create a new lecturer
router.post('/', lecturersController.createLecturer);

// Route to update a lecturer by ID
router.put('/:id', lecturersController.updateLecturer);

// Route to delete a lecturer by ID
router.delete('/:id', lecturersController.deleteLecturer);

export default router;

