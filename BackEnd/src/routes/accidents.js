const express = require("express");
const router = express.Router();
const accidentController = require('../controllers/accidentController');
const { verificarToken, isAnalistaNegocio } = require('../middlewares/authJwt');
router.post("/accidents", accidentController.createAccident);
router.get("/accidents", accidentController.getAllAccidents);
router.get("/accidents/:id", accidentController.getAccidentById);
router.put("/accidents/:id", accidentController.updateAccidentById);
router.delete("/accidents/:id", accidentController.deleteAccidentById);

module.exports = router;
