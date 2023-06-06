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
    require: true
  },
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phoneNumber: {
    type: String,
  },
  password: {
    type: String,
    require: true
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
