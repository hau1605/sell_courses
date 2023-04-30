import * as categoriesDAO from '../dao/categoriesDAO.js';

// Controller function to get all categories
const getAllCategories = async (req, res) => {
  try {
    const categories = await categoriesDAO.getAllCategories();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function to get a category by ID
const getCategoryById = async (req, res) => {
  try {
    const category = await categoriesDAO.getCategoryById(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function to create a new category
const createCategory = async (req, res) => {
  try {
    const category = categoriesDAO.createCategory(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function to update a category by ID
const updateCategory = async (req, res) => {
  try {
    const category = await categoriesDAO.updateCategory(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller function to delete a category by ID
const deleteCategory = async (req, res) => {
  try {
    const category = await categoriesDAO.deleteCategory(req.params.id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};

