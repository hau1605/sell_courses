const Lecturer = require('../models/lecturerModel');

// Controller function to get all lecturers
const getAllLecturers = async (req, res) => {
  try {
    const lecturers = await Lecturer.find();
    res.status(200).json({ success: true, data: lecturers });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Controller function to get a lecturer by ID
const getLecturerById = async (req, res) => {
  try {
    const lecturer = await Lecturer.findById(req.params.id);
    if (!lecturer) {
      return res.status(404).json({ success: false, error: 'Lecturer not found' });
    }
    res.status(200).json({ success: true, data: lecturer });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Controller function to create a new lecturer
const createLecturer = async (req, res) => {
  try {
    const lecturer = await Lecturer.create(req.body);
    res.status(201).json({ success: true, data: lecturer });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Controller function to update a lecturer by ID
const updateLecturer = async (req, res) => {
  try {
    const lecturer = await Lecturer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!lecturer) {
      return res.status(404).json({ success: false, error: 'Lecturer not found' });
    }
    res.status(200).json({ success: true, data: lecturer });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Controller function to delete a lecturer by ID
const deleteLecturer = async (req, res) => {
  try {
    const lecturer = await Lecturer.findByIdAndDelete(req.params.id);
    if (!lecturer) {
      return res.status(404).json({ success: false, error: 'Lecturer not found' });
    }
    res.status(200).json({ success: true, data: lecturer });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

module.exports = {
  getAllLecturers,
  getLecturerById,
  createLecturer,
  updateLecturer,
  deleteLecturer,
};

