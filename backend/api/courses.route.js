import express from 'express';
import CoursesController from './courses.controller.js';

const router = express.Router();

router.route('/').get(CoursesController.apiGetCourses);

export default router;