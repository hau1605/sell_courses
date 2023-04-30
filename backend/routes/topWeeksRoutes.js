import express from 'express';
const router = express.Router();

import * as topWeeksController from '../controllers/topWeeksController.js';

// Route handlers for top weeks

// Get all top weeks
router.get('/', topWeeksController.getAllTopWeeks);

// Get top week by ID
router.get('/:id', topWeeksController.getTopWeekById);

// Create a new top week
router.post('/', topWeeksController.createTopWeek);

// Update a top week by ID
router.put('/:id', topWeeksController.updateTopWeek);

// Delete a top week by ID
router.delete('/:id', topWeeksController.deleteTopWeek);

export default router;
