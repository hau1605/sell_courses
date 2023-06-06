import mongoose from 'mongoose';
import User from './userModel.js';
import Course from './courseModel.js';

const cartSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  courses: [
    {
      course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
      quantity: { type: Number, default: 1 },
    },
  ],
});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;
