const TopWeek = require('../models/topWeekModel');

// Controller functions for top weeks

// Get all top weeks
exports.getAllTopWeeks = async (req, res) => {
  try {
    const topWeeks = await TopWeek.find();
    res.status(200).json(topWeeks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get top weeks', error: err });
  }
};

// Get top week by ID
exports.getTopWeekById = async (req, res) => {
  try {
    const topWeek = await TopWeek.findById(req.params.id);
    if (!topWeek) {
      return res.status(404).json({ message: 'Top week not found' });
    }
    res.status(200).json(topWeek);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get top week', error: err });
  }
};

// Create a new top week
exports.createTopWeek = async (req, res) => {
  try {
    const topWeek = await TopWeek.create(req.body);
    res.status(201).json(topWeek);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create top week', error: err });
  }
};

// Update a top week by ID
exports.updateTopWeek = async (req, res) => {
  try {
    const topWeek = await TopWeek.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!topWeek) {
      return res.status(404).json({ message: 'Top week not found' });
    }
    res.status(200).json(topWeek);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update top week', error: err });
  }
};

// Delete a top week by ID
exports.deleteTopWeek = async (req, res) => {
  try {
    const topWeek = await TopWeek.findByIdAndDelete(req.params.id);
    if (!topWeek) {
      return res.status(404).json({ message: 'Top week not found' });
    }
    res.status(200).json({ message: 'Top week deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete top week', error: err });
  }
};

