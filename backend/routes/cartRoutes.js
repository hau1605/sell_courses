const express = require('express');
const router = express.Router();

const cartController = require('../controllers/cartController');

// Routes for /cart
router.post('/', cartController.createCart);
router.get('/:cartId', cartController.getCart);
router.put('/:cartId', cartController.updateCart);
router.delete('/:cartId', cartController.deleteCart);

module.exports = router;

