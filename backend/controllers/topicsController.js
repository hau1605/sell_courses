import * as topicsDAO from '../dao/topicsDAO.js';

// Controller function to get all topics
const getAllTopics = async (req, res) => {
  try {
    const topics = await topicsDAO.getAllTopics();
    res.status(200).json({ success: true, data: topics });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to get topics', error: err });
  }
};

// Controller function to get a topic by ID
const getTopicById = async (req, res) => {
  try {
    console.log(req.params.id)
    const topic = await topicsDAO.getTopicById(req.params.id);
    console.log(req.params.id)
    if (!topic) {
      return res.status(404).json({ success: false, message: 'Topic not found' });
    }
    res.status(200).json({ success: true, data: topic });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to get topic', error: err });
  }
};

// Controller function to create a new topic
const createTopic = async (req, res) => {
  try {
    const topic = await topicsDAO.createTopic(req.body);
    res.status(201).json({ success: true, data: topic });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create topic', error: err });
  }
};

// Controller function to update a topic by ID
const updateTopic = async (req, res) => {
  try {
    const topic = await topicsDAO.updateTopic(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!topic) {
      return res.status(404).json({ success: false, message: 'Topic not found' });
    }
    res.status(200).json({ success: true, data: topic });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update topic', error: err });
  }
};

// Controller function to delete a topic by ID
const deleteTopic = async (req, res) => {
  try {
    const topic = await topicsDAO.deleteTopic(req.params.id);
    if (!topic) {
      return res.status(404).json({ success: false, message: 'Topic not found' });
    }
    res.status(200).json({ success: true, message: 'Topic deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete topic', error: err });
  }
};

export { deleteTopic, updateTopic, createTopic, getAllTopics, getTopicById }
