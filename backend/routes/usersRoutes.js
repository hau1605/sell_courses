const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Route to get all users
router.get('/', usersController.getAllUsers);

// Route to get a user by ID
// router.get('/:id', usersController.getUserById);
router.get('/:email', usersController.getUserByEmail);

// Route to create a new user
router.post('/', usersController.createUser);

// Route to update a user by ID
router.put('/:email', usersController.updateUser);

// Route to delete a user by ID
router.delete('/:id', usersController.deleteUser);

router.post('/login', usersController.login);
router.post('/forgot-password', usersController.forgotPassword);
router.post('/reset-password/confirmOtp', usersController.confirmOtp);
router.post('/reset-password', usersController.resetPassword);
router.post('/logout', usersController.logout);
router.put('/change-password/:email', usersController.changePassword);

module.exports = router;

