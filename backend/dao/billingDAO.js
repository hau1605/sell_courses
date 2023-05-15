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

export {
  findAll,createBilling,findById,updateById,deleteById
}
