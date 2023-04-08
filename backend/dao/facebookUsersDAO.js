const FacebookUser = require('./facebookUserModel');

// Create a new Facebook user
const createFacebookUser = async (facebookUserData) => {
  try {
    const newFacebookUser = new FacebookUser(facebookUserData);
    const savedFacebookUser = await newFacebookUser.save();
    return savedFacebookUser;
  } catch (error) {
    throw error;
  }
};

// Get all Facebook users
const getAllFacebookUsers = async () => {
  try {
    const facebookUsers = await FacebookUser.find();
    return facebookUsers;
  } catch (error) {
    throw error;
  }
};

// Get a Facebook user by ID
const getFacebookUserById = async (facebookUserId) => {
  try {
    const facebookUser = await FacebookUser.findById(facebookUserId);
    return facebookUser;
  } catch (error) {
    throw error;
  }
};

// Update Facebook user data
const updateFacebookUser = async (facebookUserId, facebookUserData) => {
  try {
    const updatedFacebookUser = await FacebookUser.findByIdAndUpdate(facebookUserId, facebookUserData, { new: true });
    return updatedFacebookUser;
  } catch (error) {
    throw error;
  }
};

// Delete a Facebook user
const deleteFacebookUser = async (facebookUserId) => {
  try {
    await FacebookUser.findByIdAndDelete(facebookUserId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createFacebookUser,
  getAllFacebookUsers,
  getFacebookUserById,
  updateFacebookUser,
  deleteFacebookUser
};

