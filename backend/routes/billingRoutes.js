import express from 'express';
const router = express.Router();

import * as billingController from '../controllers/billingController.js';

// GET /api/billings
router.get("/", billingController.getBillings);

// GET /api/billings
router.post("/validate", billingController.validate);

// POST /api/billings
router.post("/", billingController.createBilling);

// GET /api/billings/:id
router.get("/:id", billingController.getBillingById);

// GET /api/billings/:email
router.get("/:email/data", billingController.getBillingByEmail);

// PUT /api/billings/:id
router.put("/:id", billingController.updateBillingById);

// DELETE /api/billings/:id
router.delete("/:id", billingController.deleteBillingById);

// purchase
router.post("/purchase", billingController.purchase);

export default router;
