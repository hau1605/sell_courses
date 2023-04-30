import express from 'express';
const router = express.Router();

import * as loginController from '../controllers/loginController.js';

router.post('/login', loginController.login);
router.post('/logout', loginController.logout);
router.post('/forgot-password', loginController.forgotPassword);
router.post('/reset-password/confirmOtp', loginController.confirmOtp);
router.post('/reset-password', loginController.resetPassword);

export default router;

