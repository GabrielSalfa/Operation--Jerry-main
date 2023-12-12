const express = require("express");
const router = express.Router();
const insuredController = require('../controllers/insuredController');

router.post("/insured", insuredController.createInsured);
router.get("/insured", insuredController.getAllInsureds);
router.get("/insured/:id", insuredController.getInsuredById);
router.put("/insured/:id", insuredController.updateInsuredById);
router.delete("/insured/:id", insuredController.deleteInsuredById);

module.exports = router;