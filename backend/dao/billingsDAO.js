import mongoose from "mongoose";
import Billing from "../models/billingModel.js";

async function findAll() {
  return Billing.find();
}

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

async function createBilling(newBilling) {
  try {
    const billing = new Billing(newBilling);
    return await billing.save();
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
  getItemsForUser
};
