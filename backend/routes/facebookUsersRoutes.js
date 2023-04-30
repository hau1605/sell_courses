import express from 'express';
const router = express.Router();

import * as facebookUsersController from '../controllers/facebookUsersController.js';

// Define routes for Facebook users

// Get all Facebook users
router.get('/', facebookUsersController.getAllFacebookUsers);

// Get Facebook user by ID
router.get('/:id', facebookUsersController.getFacebookUserById);

// Create a new Facebook user
router.post('/', facebookUsersController.createFacebookUser);

// Update a Facebook user by ID
router.put('/:id', facebookUsersController.updateFacebookUser);

// Delete a Facebook user by ID
router.delete('/:id', facebookUsersController.deleteFacebookUser);

export default router;

