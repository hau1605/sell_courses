import Category from '../models/categoryModel.js';

// Create a new category
const createCategory = async (categoryData) => {
  try {
    const newCategory = new Category(categoryData);
    const savedCategory = await newCategory.save();
    return savedCategory;
  } catch (error) {
    throw error;
  }
};

// Get all categories
const getAllCategories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    throw error;
  }
};

// Get a category by ID
const getCategoryById = async (categoryId) => {
  try {
    const category = await Category.findById(categoryId);
    return category;
  } catch (error) {
    throw error;
  }
};

// Update category data
const updateCategory = async (categoryId, categoryData) => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(categoryId, categoryData, { new: true });
    return updatedCategory;
  } catch (error) {
    throw error;
  }
};

// Delete a category
const deleteCategory = async (categoryId) => {
  try {
    await Category.findByIdAndDelete(categoryId);
  } catch (error) {
    throw error;
  }
};

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
};

