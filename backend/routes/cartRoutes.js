module.exports = cartController;

const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes that require authentication
router.use(authMiddleware);

// GET all cart items
router.get('/', cartController.getCartItems);

// POST a new cart item
router.post('/', cartController.createCartItem);

// PUT update a cart item
router.put('/:id', cartController.updateCartItem);

// DELETE a cart item
router.delete('/:id', cartController.deleteCartItem);

module.exports = router;

