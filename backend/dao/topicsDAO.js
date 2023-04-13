

const Topic = require('../models/topicModel');

// Create a new topic
const createTopic = async (topicData) => {
  try {
    const newTopic = new Topic(topicData);
    const savedTopic = await newTopic.save();
    return savedTopic;
  } catch (error) {
    throw error;
  }
};

// Get all topics
const getAllTopics = async () => {
  try {
    const topics = await Topic.find();
    return topics;
  } catch (error) {
    throw error;
  }
};

// Get a topic by ID
const getTopicById = async (topicId) => {
  try {

    const topic = await Topic.findById(id);
    return topic;
  } catch (error) {
    throw error;
  }
};

// Update topic data
const updateTopic = async (topicId, topicData) => {
  try {
    const updatedTopic = await Topic.findByIdAndUpdate(topicId, topicData, { new: true });
    return updatedTopic;
  } catch (error) {
    throw error;
  }
};

// Delete a topic
const deleteTopic = async (topicId) => {
  try {
    await Topic.findByIdAndDelete(topicId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTopic,
  getAllTopics,
  getTopicById,
  updateTopic,
  deleteTopic
};

