const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/login', loginController.login);
router.post('/logout', loginController.logout);
router.post('/forgot-password', loginController.forgotPassword);
router.post('/reset-password/confirmOtp', loginController.confirmOtp);
router.post('/reset-password', loginController.resetPassword);

module.exports = router;

