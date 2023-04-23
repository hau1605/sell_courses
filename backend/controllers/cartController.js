const cartDAO = require('../dao/cartDAO');

async function createCart(req, res, next) {
  try {
    const cart = await cartDAO.createCart(req.body);
    res.status(201).json({ success: true, data: cart });
  } catch (error) {
    next(error);
  }
}

async function getCart(req, res, next) {
  try {
    const cart = await cartDAO.getCartById(req.params.cartId);
    if (!cart) {
      res.status(404).json({ success: false, message: 'Cart not found' });
      return;
    }
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    next(error);
  }
}

async function updateCart(req, res, next) {
  try {
    const cart = await cartDAO.updateCart(req.params.cartId, req.body);
    if (!cart) {
      res.status(404).json({ success: false, message: 'Cart not found' });
      return;
    }
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    next(error);
  }
}

async function deleteCart(req, res, next) {
  try {
    const cart = await cartDAO.deleteCart(req.params.cartId);
    if (!cart) {
      res.status(404).json({ success: false, message: 'Cart not found' });
      return;
    }
    res.status(200).json({ success: true, data: cart });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createCart,
  getCart,
  updateCart,
  deleteCart,
};

