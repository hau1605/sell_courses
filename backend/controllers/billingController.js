import * as billingDAO from "../dao/billingsDAO.js";
import * as userDAO from "../dao/usersDAO.js";
import mongoose from "mongoose";

// GET /api/billings
async function getBillings(req, res) {
  try {
    if (req.body.user_id) {
      const items = await billingDAO.getItemsForUser(req.body.user_id);
      return res.status(200).json(items);
    } else {
      const billings = await billingDAO.findAll();
      return res.status(200).json(billings);
    }
  } catch (error) {
    console.error("Failed to retrieve billings:", error);
    return res.status(500).send(error);
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

async function createOrder(orders) {
  let total_amount = 0;
  let orderStatus = await verifyOrders(orders);
  const order = {
    order_id: new mongoose.Types.ObjectId(),
    payment_method: {
      type: orders.payment_method.type,
      card_number: orders.payment_method.card_number,
      expiration_date: orders.payment_method.expiration_date,
      security_code: orders.payment_method.security_code,
    },
    date: Date.now(),
    status: orderStatus,
    items: [],
    total_amount: 0,
  };

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

  return order;
}

async function createBillingDocument(user_id, user_name, email, orders) {
  const billingData = {
    user_id: new mongoose.Types.ObjectId(user_id),
    user_name: user_name,
    email: email,
    orders: [],
  };

  const order = await createOrder(orders);
  billingData.orders.push(order);

  await billingDAO.createBilling(billingData, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
}

async function updateBillingDocument(user_id, orders) {
  const userBillingDoc = await billingDAO.findBillingDocumentByUserId(user_id);

  const order = await createOrder(orders);
  userBillingDoc.orders.push(order);
  const id = { user_id: userBillingDoc.user_id };

  await billingDAO.updateById(id, userBillingDoc, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
  });
}

async function purchase(req, res) {
  const { user_id, user_name, email, orders } = req.body;
  try {
    // Check if user_id exists in the billing collection
    const exists = await billingDAO.userExists(user_id);
    if (exists) {
      // User exists in billing collection -> update orders array
      await updateBillingDocument(user_id, orders);
    } else {
      // User does not exist in billing collection -> create a new billing document
      await createBillingDocument(user_id, user_name, email, orders);
    }
    // Return HTTP OK if the operation is successful
    res.status(200).send("Success");

    // add purchased course to user.purchasedCourses
    userDAO.addtopurchasedCourses(user_id, orders.items);

    //TODO: send thank you for purchasing email
  } catch (error) {
    // Return HTTP error message if there is a failure
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

async function verifyOrders(orders) {
  //pseudo verify payment function
  if (orders.items.length === 0) {
    return "failed";
  }
  return "success";
}

export {
  getBillings,
  getBillingById,
  createBilling,
  updateBillingById,
  deleteBillingById,
  purchase,
};
