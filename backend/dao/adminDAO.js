const Admin = require('./adminModel');

// Create a new admin
const createAdmin = async (adminData) => {
  try {
    const newAdmin = new Admin(adminData);
    const savedAdmin = await newAdmin.save();
    return savedAdmin;
  } catch (error) {
    throw error;
  }
};

// Get all admins
const getAllAdmins = async () => {
  try {
    const admins = await Admin.find();
    return admins;
  } catch (error) {
    throw error;
  }
};

// Get an admin by ID
const getAdminById = async (adminId) => {
  try {
    const admin = await Admin.findById(adminId);
    return admin;
  } catch (error) {
    throw error;
  }
};

// Update admin data
const updateAdmin = async (adminId, adminData) => {
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(adminId, adminData, { new: true });
    return updatedAdmin;
  } catch (error) {
    throw error;
  }
};

// Delete an admin
const deleteAdmin = async (adminId) => {
  try {
    await Admin.findByIdAndDelete(adminId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin
};

