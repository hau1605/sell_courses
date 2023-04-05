// Import the CoursesDAO class from the data access object module
import CoursesDAO from "../dao/coursesDAO.js";

// Define a class for controlling the courses data
export default class CoursesController {
  // Define a static method to get the courses data and send it as a JSON response
  static async apiGetCourses(req, res, next) {
    // Get the courses per page and page number from the query parameters or use default values
    const coursesPerPage = req.query.coursesPerPage
      ? parseInt(req.query.coursesPerPage)
      : 4;
    const page = req.query.page ? parseInt(req.query.page) : 0;
    // Declare an empty object to store the filters
    let filters = {};

    // If there is a title filter in the query parameters, add it to the filters object
    if (req.query.title) {
      filters.title = req.query.title;
    }

    // Call the getCourses method from the CoursesDAO class with the filters, page and courses per page arguments
    const { coursesList, totalNumCourses } = await CoursesDAO.getCourses({
      filters,
      page,
      coursesPerPage,
    });

    // Construct a response object with the courses list and other relevant information
    let response = {
      courses: coursesList,
      page: page,
      filters: filters,
      entries_per_page: coursesPerPage,
      total_results: totalNumCourses,
    };
    // Send the response object as a JSON response
    res.json(response);
  }
}

