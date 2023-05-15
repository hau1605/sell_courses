import { faker } from "@faker-js/faker/locale/vi";
import mongoose from "mongoose";
import { connectDB } from "../db/connection.js";
import { createBilling } from "../dao/billingDAO.js";
const { ObjectId } = mongoose.Types;
const numGenerated = 10;

// Connect to MongoDB database
await connectDB();

// Generate fake billing data
function generateBillingData() {
  const billingData = {
    user_id: new ObjectId(),
    user_name: faker.person.fullName(),
    email: faker.internet.email(),
    payment_method: {
      type: "credit_card",
      card_number: faker.finance.creditCardNumber(),
      expiration_date: faker.date.future().toISOString().slice(0, 7),
      security_code: faker.finance.creditCardCVV(),
    },
    orders: [],
  };

  // Generate fake orders
  for (let i = 0; i < faker.number.int({ min: 1, max: 5 }); i++) {
    const order = {
      order_id: new ObjectId(),
      date: faker.date.recent(),
      status: faker.helpers.arrayElement(["pending", "shipped", "delivered"]),
      items: [],
      total_amount: faker.finance.amount(10, 500, 2),
    };

    // Generate fake items for the order
    for (let j = 0; j < faker.number.int({ min: 1, max: 5 }); j++) {
      const item = {
        course_id: new ObjectId(),
        course_name: faker.commerce.productName(),
        course_price: faker.finance.amount(5, 100, 2),
      };

      order.items.push(item);
    }

    billingData.orders.push(order);
  }

  return billingData;
}

// Save fake billing data to database
for (let i = 0; i < numGenerated; i++) {
  await createBilling(generateBillingData());
}
console.log("Fake billing data generated");
process.exit(0);
