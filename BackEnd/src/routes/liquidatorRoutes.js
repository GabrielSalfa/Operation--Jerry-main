const express = require("express");
const router = express.Router();
const liquidatorController = require("../controllers/liquidatorController");

// Ruta para crear un liquidador
router.post("/liquidator", liquidatorController.createLiquidator);

module.exports = router;