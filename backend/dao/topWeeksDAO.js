const TopWeek = require('./topWeekModel');

// Create a new top week
const createTopWeek = async (topWeekData) => {
  try {
    const newTopWeek = new TopWeek(topWeekData);
    const savedTopWeek = await newTopWeek.save();
    return savedTopWeek;
  } catch (error) {
    throw error;
  }
};

// Get all top weeks
const getAllTopWeeks = async () => {
  try {
    const topWeeks = await TopWeek.find();
    return topWeeks;
  } catch (error) {
    throw error;
  }
};

// Get a top week by ID
const getTopWeekById = async (topWeekId) => {
  try {
    const topWeek = await TopWeek.findById(topWeekId);
    return topWeek;
  } catch (error) {
    throw error;
  }
};

// Update top week data
const updateTopWeek = async (topWeekId, topWeekData) => {
  try {
    const updatedTopWeek = await TopWeek.findByIdAndUpdate(topWeekId, topWeekData, { new: true });
    return updatedTopWeek;
  } catch (error) {
    throw error;
  }
};

// Delete a top week
const deleteTopWeek = async (topWeekId) => {
  try {
    await TopWeek.findByIdAndDelete(topWeekId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createTopWeek,
  getAllTopWeeks,
  getTopWeekById,
  updateTopWeek,
  deleteTopWeek
};

