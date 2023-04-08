const express = require('express');
const router = express.Router();
const categoriesDAO = require('../dao/categoriesDAO');

// Create a new category
router.post('/', async (req, res) => {
  try {
    const newCategory = req.body;
    const createdCategory = await categoriesDAO.createCategory(newCategory);
    res.status(201).json(createdCategory);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await categoriesDAO.getAllCategories();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a category by ID
router.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await categoriesDAO.getCategoryById(categoryId);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a category by ID
router.put('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const updatedCategory = req.body;
    const category = await categoriesDAO.updateCategory(categoryId, updatedCategory);
    if (category) {
      res.status(200).json(category);
    } else {
      res.status(404).json({ error: 'Category not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a category by ID
router.delete('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    await categoriesDAO.deleteCategory(categoryId);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

