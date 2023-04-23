const lecturersDAO = require('../dao/lecturersDAO');

// Controller function to get all lecturers
const getAllLecturers = async (req, res) => {
  try {
    const lecturers = await lecturersDAO.getAllLecturers();
    res.status(200).json({ success: true, data: lecturers });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Controller function to get a lecturer by ID
const getLecturerById = async (req, res) => {
  try {
    const lecturer = await lecturersDAO.getLecturerById(req.params.id);
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
    const lecturer = await lecturersDAO.createLecturer(req.body);
    res.status(201).json({ success: true, data: lecturer });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Controller function to update a lecturer by ID
const updateLecturer = async (req, res) => {
  try {
    const lecturer = await lecturersDAO.updateLecturer(req.params.id, req.body);
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
    const lecturer = await lecturersDAO.deleteLecturer(req.params.id);
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

