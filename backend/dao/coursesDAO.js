import Course from '../models/courseModel.js';

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
const getCourses= async (filters ,
  page ,
  coursesPerPage,sort,sortOrder )=>
{
  const totalCount = await Course.countDocuments(filters);
  const totalPages = Math.ceil(totalCount / coursesPerPage);
  try {const filteredCoures = await Course.find(filters)
    .skip((page - 1) * coursesPerPage)
    .limit(coursesPerPage).sort({[sort]: sortOrder});
    
    return {filteredCoures, totalPages,totalCount};
  }
  catch(e){
      console.error(`Unable to issue find command, ${e}`);
      return {filteredCoures:[], totalPages:0,totalCount:0};
  }
}    
// Get a course by ID
const getCourseById = async (courseId) => {
  try {
    const course = await Course.findById(courseId);
    return course;
  } catch (error) {
    throw error;
  }
};
const getCourseByName = async (Name) => {
  try {
    const course = await Course.find({name: { $regex: Name, $options: "i" }});
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

export {
  createCourse,
  getAllCourses,
  getCourses,
  getCourseById,
  getCourseByName,
  updateCourse,
  deleteCourse
};

