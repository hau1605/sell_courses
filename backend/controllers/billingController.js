import * as billingDAO from "../dao/billingsDAO.js";
import { getUserById } from "../dao/usersDAO.js";

// GET /api/billings
async function getBillings(req, res) {
  try {
    const billings = await billingDAO.findAll();
    return res.status(200).json(billings);
  } catch (err) {
    return res.status(500).send(err);
  }
}

// POST /api/billings
async function createBilling(req, res) {
  const billing = billingDAO.createBilling(req.body, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(201).json(billing);
  });
}

// GET /api/billings/:id
async function getBillingById(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send(`Invalid ID: ${id}`);
  }

  billingDAO.getBillingById(id, (err, billing) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(billing);
  });
}

// PUT /api/billings/:id
async function updateBillingById(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send(`Invalid ID: ${id}`);
  }
  billingDAO.updateBillingById(id, req.body, (err, billing) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(billing);
  });
}

// DELETE /api/billings/:id
async function deleteBillingById(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send(`Invalid ID: ${id}`);
  }
  billingDAO.deleteBillingById(id, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(204).send();
  });
}

async function purchase(req, res) {
  const { user_id, orders } = req.body;
  // Check if user_id exists in the billing collection -> update orders array
  userExists(user_id)
    .then((exists) => {
      if (exists) {
        // User exists in billing collection;
      } else {
        // User does not exist in billing collection -> create a new billing document
        const userdata = getUserById(user_id);
        const billingData = {
          user_id: mongoose.Types.ObjectId(user_id),
          user_name: userdata.name,
          email: userdata.email,
          orders: [],
        };
        // Insert orders
        let total_amount = 0;
        let order = {
          order_id: new ObjectId(),
          payment_method: {
            type: orders.payment_method.type,
            card_number: orders.payment_method.card_number,
            expiration_date: orders.payment_method.expiration_date,
            security_code: orders.payment_method.security_code,
          },
          date: orders.date,
          status: "pending",
          items: [],
          total_amount: 0,
        };
        // Insert items for the order
        for (let j = 0; j < orders.items.length; j++) {
          const item = {
            course_id: orders.items[j].course_id,
            course_name: orders.items[j].course_name,
            course_price: orders.items[j].course_price,
          };
          total_amount += orders.items[j].course_price;
          order.items.push(item);
        }
        order.total_amount = total_amount;

        billingData.orders.push(order);
        billingDAO.createBilling(billingData, (err) => {
          if (err) {
            return res.status(500).send(err);
          }
        });
      }
    })
    .catch((error) => {
      console.error("Failed to check user existence:", error);
    });

  try {
    // Create a new Billing object
    const billing = new billing({
      user_id: mongoose.Types.ObjectId(user_id),
      items: items.map((item) => ({
        course_id: mongoose.Types.ObjectId(item.course_id),
        course_name: item.course_name,
        course_price: item.course_price,
      })),
    });

    // Save the Billing object to the database
    await billing.save();

    res.status(201).json({ message: "Purchase successful" });
  } catch (error) {
    console.error("Failed to complete purchase:", error);
    res.status(500).json({ error: "Failed to complete purchase" });
  }
}

export {
  getBillings,
  getBillingById,
  createBilling,
  updateBillingById,
  deleteBillingById,
  purchase,
};
