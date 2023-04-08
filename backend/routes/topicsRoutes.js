const express = require('express');
const router = express.Router();
const topicsDAO = require('../dao/topicsDAO');

// Create a new topic
router.post('/', async (req, res) => {
  try {
    const newTopic = req.body;
    const createdTopic = await topicsDAO.createTopic(newTopic);
    res.status(201).json(createdTopic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all topics
router.get('/', async (req, res) => {
  try {
    const topics = await topicsDAO.getAllTopics();
    res.status(200).json(topics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a topic by ID
router.get('/:id', async (req, res) => {
  try {
    const topicId = req.params.id;
    const topic = await topicsDAO.getTopicById(topicId);
    if (topic) {
      res.status(200).json(topic);
    } else {
      res.status(404).json({ error: 'Topic not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a topic by ID
router.put('/:id', async (req, res) => {
  try {
    const topicId = req.params.id;
    const updatedTopic = req.body;
    const topic = await topicsDAO.updateTopic(topicId, updatedTopic);
    if (topic) {
      res.status(200).json(topic);
    } else {
      res.status(404).json({ error: 'Topic not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a topic by ID
router.delete('/:id', async (req, res) => {
  try {
    const topicId = req.params.id;
    await topicsDAO.deleteTopic(topicId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

