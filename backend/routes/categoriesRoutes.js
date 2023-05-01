const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categoriesController');

// Route to get all categories
router.get('/', categoriesController.getAllCategories);

// Route to get a category by ID
router.get('/:id', categoriesController.getCategoryById);

// Route to create a new category
router.post('/', categoriesController.createCategory);

// Route to update a category by ID
router.put('/:id', categoriesController.updateCategory);

// Route to delete a category by ID
router.delete('/:id', categoriesController.deleteCategory);

module.exports = router;

