import mongoose from 'mongoose';

const billingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
  },
  user_name: {
    type: String,
  },
  email: {
    type: String,
  },
  payment_method: {
    type: {
      type: String,
      enum: ['credit_card'],
    },
    card_number: {
      type: String,
    },
    expiration_date: {
      type: String,
    },
    security_code: {
      type: Number,
    }
  },
  orders: [
    {
      order_id: {
        type: mongoose.Types.ObjectId,
      },
      date: {
        type: Date,
      },
      status: {
        type: String,
      },
      items: [
        {
          course_id: {
            type: mongoose.Types.ObjectId,
          },
          course_name: {
            type: String,
          },
          course_price: {
            type: Number,
          }
        }
      ],
      total_amount: {
        type: Number,
      }
    }
  ]
});

const Billing = mongoose.model('Billing', billingSchema);

export default Billing;
