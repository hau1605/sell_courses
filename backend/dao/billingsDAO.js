import mongoose from "mongoose";
import Billing from "../models/billingModel.js";

async function findAll() {
  return Billing.find();
};

async function createBilling(newBilling) {
  const billing = new Billing(newBilling);
  return billing.save();
};

async function findById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return Promise.reject(`Invalid ID: ${id}`);
  }
  return Billing.findById(id);
};

async function updateById(id, updateData) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return Promise.reject(`Invalid ID: ${id}`);
  }
  return Billing.findByIdAndUpdate(id, updateData, { new: true });
};

async function deleteById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return Promise.reject(`Invalid ID: ${id}`);
  }
  return Billing.findByIdAndDelete(id);
};

async function userExists(userId){
  try {
    const existingBilling = await Billing.findOne({ user_id: userId });
    return !!existingBilling; // Returns true if the billing document exists, false otherwise
  } catch (error) {
    console.error('Failed to check user existence:', error);
    throw error;
  }
};

export {
  findAll,createBilling,findById,updateById,deleteById,userExists
}
