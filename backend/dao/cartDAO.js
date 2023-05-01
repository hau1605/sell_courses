const Cart = require('../models/cartModel');

async function createCart(cartData) {
  try {
    const newCart = new Cart(cartData);
    return await newCart.save();
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getCartById(cartId) {
  try {
    return await Cart.findById(cartId).populate('user courses.course');
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updateCart(cartId, cartData) {
  try {
    const existingCart = await Cart.findById(cartId);
    if (!existingCart) {
      throw new Error('Cart not found');
    }

    Object.assign(existingCart, cartData);

    return await existingCart.save();
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteCart(cartId) {
  try {
    const deletedCart = await Cart.findByIdAndDelete(cartId);
    if (!deletedCart) {
      throw new Error('Cart not found');
    }

    return deletedCart;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  createCart,
  getCartById,
  updateCart,
  deleteCart,
};

