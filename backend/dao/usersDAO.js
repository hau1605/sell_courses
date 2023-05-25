import User from "../models/userModel.js";

// Create a new user
const createUser = async (userData) => {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    return savedUser;
  } catch (error) {
    throw error;
  }
};

// Get all user
const getAllUsers = async () => {
  try {
    const user = await User.find();
    return user;
  } catch (error) {
    throw error;
  }
};

// Get a user by email
const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (error) {
    throw error;
  }
};

// Get a user by ID
const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw error;
  }
};

// Update user data
const updateUser = async (userEmail, userData) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(userEmail, userData, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    throw error;
  }
};

// Delete a user
const deleteUser = async (userId) => {
  try {
    await User.findByIdAndDelete(userId);
  } catch (error) {
    throw error;
  }
};
const addtopurchasedCourses = async (user_id, items) => {
  try {
    const user = await User.findById(user_id);
    if (!user) {
      throw new Error("User not found"); // Throw an error if user is null or undefined
    }
    for (let i = 0; i < items.length; i++) {
      user.purchasedCourses.push(items[i].course_id);
    }
    user.save();
  } catch (error) {
    throw error;
  }
};

export {
  createUser,
  getAllUsers,
  getUserByEmail,
  getUserById,
  updateUser,
  deleteUser,
  addtopurchasedCourses,
};
