const Course = require('../models/courseModel');

// Create a new course
const createCourse = async (courseData) => {
  try {
    const newCourse = new Course(courseData);
    const savedCourse = await newCourse.save();
    return savedCourse;
  } catch (error) {
    throw error;
  }
};

// Get all courses
const getAllCourses = async () => {
  try {
    const courses = await Course.find();
    return courses;
  } catch (error) {
    throw error;
  }
};

// Get a course by ID
const getCourseById = async (courseId) => {
  try {
    const course = await Course.findById(courseId);
    return course;
  } catch (error) {
    throw error;
  }
};

// Update course data
const updateCourse = async (courseId, courseData) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(courseId, courseData, { new: true });
    return updatedCourse;
  } catch (error) {
    throw error;
  }
};

// Delete a course
const deleteCourse = async (courseId) => {
  try {
    await Course.findByIdAndDelete(courseId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
};

