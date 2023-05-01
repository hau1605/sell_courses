import express from 'express';
const router = express.Router();

import * as usersController from '../controllers/usersController.js';

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

export default router;
