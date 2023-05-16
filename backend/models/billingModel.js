import mongoose from 'mongoose';

const billingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  orders: [
    {
      order_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      payment_method: {
        type: {
          type: String
        },
        card_number: {
          type: String
        },
        expiration_date: {
          type: String
        },
        security_code: {
          type: Number
        }
      },
      date: {
        type: Date
      },
      status: {
        type: String
      },
      items: [
        {
          course_id: {
            type: mongoose.Schema.Types.ObjectId
          },
          course_name: {
            type: String
          },
          course_price: {
            type: Number
          }
        }
      ],
      total_amount: {
        type: Number,
        required: true
      }
    }
  ]
});

const Billing = mongoose.model('Billing', billingSchema);

export default Billing;
