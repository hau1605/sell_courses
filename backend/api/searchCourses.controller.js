// import CoursesDAO from '../dao/coursesDAO.js';

// export default class SearchCoursesController {
//     static async apiSearchCourses(req, res, next) {
//         const coursesPerPage = req.query.coursesPerPage ? parseInt(req.query.coursesPerPage) : 4;
//         const page = req.query.page ? parseInt(req.query.page) : 0;
//         let filters = {};

//         // if (req.query.rated) {
//         //     filters.rated = req.query.rated;
//         // }
//         // else
//          if (req.query.title) {
//             filters.title = req.query.title;
//         }

//         const { coursesList, totalNumCourses } = await CoursesDAO.getCourses({
//             filters, page,
//             coursesPerPage
//         });

//         let response = {
//             courses: coursesList,
//             page: page,
//             filters: filters,
//             entries_per_page: coursesPerPage,
//             total_results: totalNumCourses,
//         };
//         res.json(response);
//     }
// }