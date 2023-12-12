const express = require("express");
const router = express.Router();

const presupuestoController = require('../controllers/presupuestoController'); // Ajusta la ruta al archivo correcto

// Crear un nuevo presupuesto
router.post("/presupuestoRep", presupuestoController.createPresupuesto);

// Obtener todos los presupuestos
router.get("/presupuestoRep", presupuestoController.getAllPresupuestos);

// Obtener un presupuesto por ID
router.get("/presupuestoRep/:id", presupuestoController.getPresupuestoById);

// Actualizar un presupuesto por ID
router.put("/presupuestoRep/:id", presupuestoController.updatePresupuestoById);

// Eliminar un presupuesto por ID
router.delete("/presupuestoRep/:id", presupuestoController.deletePresupuestoById);

module.exports = router;