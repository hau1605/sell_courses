import mongoose from "mongoose";
import Course from "./courseModel.js";
import Billing from "./billingModel.js"

const userSchema = new mongoose.Schema({
  gender: {
    type: String,
  },
  date: {
    type: Date,
  },
  avatar: {
    type: String,
  },
  isAuth: {
    type: Boolean,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  password: {
    type: String,
  },
  otpNumber: {
    type: String,
  },
  expiryTime: {
    type: Date,
  },
  refreshToken: {
    type: String,
  },
  billing_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Billing",
  },
  __v: {
    type: Number,
    default: 0,
  },
  idWishList: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  status: {
    type: Boolean,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
