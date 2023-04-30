import * as Admin from '../dao/adminDAO.js';

// Controller functions for admin

// Get all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await adminDAO.getAllAdmins();
    res.status(200).json(admins);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get admins', error: err });
  }
};

// Get admin by ID
exports.getAdminById = async (req, res) => {
  try {
    const admin = await adminDAO.getAdminById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get admin', error: err });
  }
};

// Create a new admin
exports.createAdmin = async (req, res) => {
  try {
    const admin = await adminDAO.createAdmin(req.body);
    res.status(201).json(admin);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create admin', error: err });
  }
};

// Update an admin by ID
exports.updateAdmin = async (req, res) => {
  try {
    const admin = await adminDAO.updateAdmin(req.params.id, req.body);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json(admin);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update admin', error: err });
  }
};

// Delete an admin by ID
exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await adminDAO.deleteAdmin(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete admin', error: err });
  }
};

