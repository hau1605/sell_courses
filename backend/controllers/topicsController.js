const Topic = require('../models/topicModel');

// Controller function to get all topics
exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.status(200).json({ success: true, data: topics });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to get topics', error: err });
  }
};

// Controller function to get a topic by ID
exports.getTopicById = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    if (!topic) {
      return res.status(404).json({ success: false, message: 'Topic not found' });
    }
    res.status(200).json({ success: true, data: topic });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to get topic', error: err });
  }
};

// Controller function to create a new topic
exports.createTopic = async (req, res) => {
  try {
    const topic = await Topic.create(req.body);
    res.status(201).json({ success: true, data: topic });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create topic', error: err });
  }
};

// Controller function to update a topic by ID
exports.updateTopic = async (req, res) => {
  try {
    const topic = await Topic.findByIdAndUpdate(req.params.id, req.body, {
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
exports.deleteTopic = async (req, res) => {
  try {
    const topic = await Topic.findByIdAndDelete(req.params.id);
    if (!topic) {
      return res.status(404).json({ success: false, message: 'Topic not found' });
    }
    res.status(200).json({ success: true, message: 'Topic deleted successfully' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete topic', error: err });
  }
};

