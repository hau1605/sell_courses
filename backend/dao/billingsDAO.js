import mongoose from "mongoose";
import Billing from "../models/billingModel.js";

async function findAll() {
  return Billing.find();
}

async function getOrdersByStatusAndUserId(status, userId){
  try {
    const billing = await Billing.find({
      "orders.status": status,
      user_id: userId
    });
    if (billing) {
      const matchingOrders = billing.reduce((orders, bill) => {
        const userOrders = bill.orders.filter((order) => order.status === status);
        return orders.concat(userOrders);
      }, []);
      return matchingOrders;
    }
    return [];
  } catch (error) {
    console.error("Error retrieving orders by status and user ID:", error);
    throw error;
  }
};

async function getItemsForUser(user_id) {
  try {
    const billingDocument = await Billing.findOne({ user_id }).exec();
    if (!billingDocument) {
      return []; // User not found or has no billing document
    }

    const orders = billingDocument.orders;
    const userItems = [];

    orders.forEach((order) => {
      const items = order.items;
      userItems.push(...items);
    });

    return userItems;
  } catch (error) {
    throw error;
  }
}

async function updateOrderStatus(orderId, newStatus) {
  try {
    const billing = await Billing.findOneAndUpdate(
      { "orders.order_id": orderId },
      { $set: { "orders.$.status": newStatus } },
      { new: true }
    );
    return billing;
  } catch (error) {
    console.error("Error updating order status:", error);
    throw error;
  }
}

async function getBillingByEmail(emailR) {
  try {
    console.log("Billing của user: ", emailR);
    const billingDocument = await Billing.findOne({ email: { $eq: emailR } });
    console.log("billingDocument: ", billingDocument);
    return billingDocument;
  } catch (error) {
    throw error;
  }
}

async function createBilling(newBilling) {
  try {
    const billing = new Billing(newBilling);
    billing.save();
    return billing._id;
  } catch (error) {
    throw error;
  }
}

async function findById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return Promise.reject(`Invalid ID: ${id}`);
  }
  return Billing.findById(id);
}

async function findBillingDocumentByUserId(user_id) {
  try {
    const existingBilling = await Billing.findOne({ user_id: user_id });
    return existingBilling;
  } catch (error) {
    throw error;
  }
}

async function findEmailByOrderId(orderId) {
  try {
    const billing = await Billing.findOne({ "orders.order_id": orderId });
    if (billing) {
      const order = billing.orders.find(
        (order) => order.order_id.toString() === orderId
      );
      if (order) {
        const { email } = billing;
        return email;
      }
    }
    return null;
  } catch (error) {
    console.error("Error finding email by order ID:", error);
    throw error;
  }
}

async function updateById(filter, updateData) {
  return Billing.findOneAndUpdate(filter, updateData);
}

async function deleteById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return Promise.reject(`Invalid ID: ${id}`);
  }
  return Billing.findByIdAndDelete(id);
}

async function userExists(userId) {
  try {
    const existingBilling = await Billing.findOne({ user_id: userId });
    return !!existingBilling; // Returns true if the billing document exists, false otherwise
  } catch (error) {
    console.error("Failed to check user existence:", error);
    throw error;
  }
}

export {
  findAll,
  createBilling,
  findById,
  updateById,
  deleteById,
  userExists,
  findBillingDocumentByUserId,
  getItemsForUser,
  getBillingByEmail,
  updateOrderStatus,
  getOrdersByStatusAndUserId,
  findEmailByOrderId,
};
