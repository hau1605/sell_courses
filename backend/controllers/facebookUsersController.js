const FacebookUser = require('../models/facebookUserModel');

// Controller functions for Facebook users

// Get all Facebook users
exports.getAllFacebookUsers = async (req, res) => {
  try {
    const facebookUsers = await FacebookUser.find();
    res.status(200).json(facebookUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Facebook user by ID
exports.getFacebookUserById = async (req, res) => {
  try {
    const facebookUser = await FacebookUser.findById(req.params.id);
    if (!facebookUser) {
      return res.status(404).json({ message: 'Facebook user not found' });
    }
    res.status(200).json(facebookUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new Facebook user
exports.createFacebookUser = async (req, res) => {
  try {
    const facebookUser = new FacebookUser(req.body);
    const savedFacebookUser = await facebookUser.save();
    res.status(201).json(savedFacebookUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a Facebook user by ID
exports.updateFacebookUser = async (req, res) => {
  try {
    const updatedFacebookUser = await FacebookUser.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedFacebookUser) {
      return res.status(404).json({ message: 'Facebook user not found' });
    }
    res.status(200).json(updatedFacebookUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a Facebook user by ID
exports.deleteFacebookUser = async (req, res) => {
  try {
    const deletedFacebookUser = await FacebookUser.findByIdAndDelete(req.params.id);
    if (!deletedFacebookUser) {
      return res.status(404).json({ message: 'Facebook user not found' });
    }
    res.status(200).json({ message: 'Facebook user deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

