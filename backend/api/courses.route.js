import express from 'express';
import CoursesController from './courses.controller.js';

const router = express.Router();

router.route('/').get(CoursesController.apiGetCourses);
router.route("/id/:id").get(CoursesController.apiGetCoursesById);


export default router; 