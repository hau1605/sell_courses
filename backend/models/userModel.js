import mongoose from "mongoose";
import Course from "./courseModel.js";
import Billing from "./billingModel.js"

const userSchema = new mongoose.Schema({
  gender: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  otpNumber: {
    type: String,
  },
  expiryTime: {
    type: Date,
  },
  refreshToken: {
    type: String,
  }
});

const User = mongoose.model("User", userSchema);

export default User;
