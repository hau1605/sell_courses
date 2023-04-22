const cartDAO = require('../dao/cartDAO');

module.exports = {
  async addItemToCart(req, res) {
    try {
      const { userId } = req.user;
      const { itemId, quantity } = req.body;

      await cartDAO.addItemToCart(userId, itemId, quantity);

      res.status(201).send({ message: 'Item added to cart successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Internal server error' });
    }
  },

async getAllCarts(req, res) {
  try {
    const carts = await cartDAO.getAllCart();
    res.status(200).json(carts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
},

  async removeItemFromCart(req, res) {
    try {
      const { userId } = req.user;
      const { itemId } = req.params;

      await cartDAO.removeItemFromCart(userId, itemId);

      res.status(200).send({ message: 'Item removed from cart successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Internal server error' });
    }
  }
};
