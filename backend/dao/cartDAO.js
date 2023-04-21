const Cart = require('../models/cartModel');

const cartDAO = {
  async getCartByUser(userId) {
    return await Cart.findOne({ user: userId }).populate('courses.course');
  },

  async addItemToCart(userId, courseId) {
    const cart = await Cart.findOne({ user: userId });

    if (cart) {
      // Cart already exists, update it
      const courseIndex = cart.courses.findIndex(
        (item) => item.course.toString() === courseId
      );
      if (courseIndex === -1) {
        // Course not found in cart, add it
        cart.courses.push({ course: courseId });
      } else {
        // Course already in cart, increment its quantity
        cart.courses[courseIndex].quantity += 1;
      }
      await cart.save();
    } else {
      // Cart does not exist, create it
      await Cart.create({ user: userId, courses: [{ course: courseId }] });
    }
  },

  async removeItemFromCart(userId, courseId) {
    const cart = await Cart.findOne({ user: userId });
    if (cart) {
      const courseIndex = cart.courses.findIndex(
        (item) => item.course.toString() === courseId
      );
      if (courseIndex !== -1) {
        if (cart.courses[courseIndex].quantity > 1) {
          // Course quantity > 1, decrement it
          cart.courses[courseIndex].quantity -= 1;
        } else {
          // Course quantity = 1, remove it from cart
          cart.courses.splice(courseIndex, 1);
        }
        await cart.save();
      }
    }
  },

  async clearCart(userId) {
    await Cart.deleteOne({ user: userId });
  },
};

module.exports = cartDAO;


