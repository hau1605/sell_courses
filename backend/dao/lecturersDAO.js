const Lecturer = require('./lecturerModel');

// Create a new lecturer
const createLecturer = async (lecturerData) => {
  try {
    const newLecturer = new Lecturer(lecturerData);
    const savedLecturer = await newLecturer.save();
    return savedLecturer;
  } catch (error) {
    throw error;
  }
};

// Get all lecturers
const getAllLecturers = async () => {
  try {
    const lecturers = await Lecturer.find();
    return lecturers;
  } catch (error) {
    throw error;
  }
};

// Get a lecturer by ID
const getLecturerById = async (lecturerId) => {
  try {
    const lecturer = await Lecturer.findById(lecturerId);
    return lecturer;
  } catch (error) {
    throw error;
  }
};

// Update lecturer data
const updateLecturer = async (lecturerId, lecturerData) => {
  try {
    const updatedLecturer = await Lecturer.findByIdAndUpdate(lecturerId, lecturerData, { new: true });
    return updatedLecturer;
  } catch (error) {
    throw error;
  }
};

// Delete a lecturer
const deleteLecturer = async (lecturerId) => {
  try {
    await Lecturer.findByIdAndDelete(lecturerId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createLecturer,
  getAllLecturers,
  getLecturerById,
  updateLecturer,
  deleteLecturer
};

