import * as billingDAO from "../dao/billingDAO.js";

// GET /api/billings
async function getBillings(req, res) {
  try {
    const billings = await billingDAO.findAll();
    return res.status(200).json(billings);
  } catch (err) {
    return res.status(500).send(err);
  }
}

// POST /api/billings
async function createBilling(req, res) {
  const billing = billingDAO.createBilling(req.body, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(201).json(billing);
  });
}

// GET /api/billings/:id
async function getBillingById(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send(`Invalid ID: ${id}`);
  }

  billingDAO.getBillingById(id, (err, billing) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(billing);
  });
}

// PUT /api/billings/:id
async function updateBillingById(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send(`Invalid ID: ${id}`);
  }
  billingDAO.updateBillingById(id, req.body, (err, billing) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(200).json(billing);
  });
}

// DELETE /api/billings/:id
async function deleteBillingById(req, res) {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send(`Invalid ID: ${id}`);
  }
  billingDAO.deleteBillingById(id, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    return res.status(204).send();
  })
};
export {
  getBillings, getBillingById, createBilling, updateBillingById, deleteBillingById
}
