import express from 'express';
const router = express.Router();

import * as cartController from '../controllers/cartController.js';

// Routes for /cart
router.post('/', cartController.createCart);
router.get('/:cartId', cartController.getCart);
router.put('/:cartId', cartController.updateCart);
router.delete('/:cartId', cartController.deleteCart);

export default router;

