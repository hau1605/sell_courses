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

  async getCartItems(req, res) {
    try {
      const { userId } = req.user;

      const items = await cartDAO.getCartItems(userId);

      res.status(200).send({ items });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Internal server error' });
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
