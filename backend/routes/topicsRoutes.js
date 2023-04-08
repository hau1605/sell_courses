const express = require('express');
const router = express.Router();
const topicsController = require('../controllers/topicsController');

// Route to get all topics
router.get('/', topicsController.getAllTopics);

// Route to get a topic by ID
router.get('/:id', topicsController.getTopicById);

// Route to create a new topic
router.post('/', topicsController.createTopic);

// Route to update a topic by ID
router.put('/:id', topicsController.updateTopic);

// Route to delete a topic by ID
router.delete('/:id', topicsController.deleteTopic);

module.exports = router;

