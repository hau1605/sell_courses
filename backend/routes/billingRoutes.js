import express from 'express';
const router = express.Router();

import * as billingDAO from '../dao/billingDAO.js';

// GET /api/billings
router.get("/", (req, res) => {
  billingDAO
    .findAll()
    .then((billings) => res.status(200).json(billings))
    .catch((err) => res.status(500).send(err));
});

// POST /api/billings
router.post("/", (req, res) => {
  billingDAO
    .create(req.body)
    .then((newBilling) => res.status(201).json(newBilling))
    .catch((err) => res.status(500).send(err));
});

// GET /api/billings/:id
router.get("/:id", (req, res) => {
  billingDAO
    .findById(req.params.id)
    .then((billing) => {
      if (!billing) {
        return res
          .status(404)
          .send(`Billing not found with ID: ${req.params.id}`);
      }
      return res.status(200).json(billing);
    })
    .catch((err) => res.status(500).send(err));
});

// PUT /api/billings/:id
router.put("/:id", (req, res) => {
  billingDAO
    .updateById(req.params.id, req.body)
    .then((updatedBilling) => {
      if (!updatedBilling) {
        return res
          .status(404)
          .send(`Billing not found with ID: ${req.params.id}`);
      }
      return res.status(200).json(updatedBilling);
    })
    .catch((err) => res.status(500).send(err));
});

// DELETE /api/billings/:id
router.delete("/:id", (req, res) => {
  billingDAO
    .deleteById(req.params.id)
    .then((deletedBilling) => {
      if (!deletedBilling) {
        return res
          .status(404)
          .send("Billing not found with ID: ${req.params.id}");
      }
      return res.status(200).json(deletedBilling);
    })
    .catch((err) => res.status(500).send(err));
});

export default router;
