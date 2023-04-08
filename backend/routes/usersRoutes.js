const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Route to get all users
router.get('/', usersController.getAllUsers);

// Route to get a user by ID
router.get('/:id', usersController.getUserById);

// Route to create a new user
router.post('/', usersController.createUser);

// Route to update a user by ID
router.put('/:id', usersController.updateUser);

// Route to delete a user by ID
router.delete('/:id', usersController.deleteUser);

module.exports = router;

