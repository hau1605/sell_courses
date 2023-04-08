const express = require('express');
const router = express.Router();
const usersDAO = require('../dao/usersDAO');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    const createdUser = await usersDAO.createUser(newUser);
    res.status(201).json(createdUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await usersDAO.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await usersDAO.getUserById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a user by ID
router.put('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const user = await usersDAO.updateUser(userId, updatedUser);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await usersDAO.deleteUser(userId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

