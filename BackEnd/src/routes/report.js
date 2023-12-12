const express = require("express");
const router = express.Router();

const reportController = require('../controllers/reportController'); 

// Crear un nuevo reporte
router.post("/report", reportController.createReport);

// Obtener todos los reportes
router.get("/report", reportController.getAllReports);

// Obtener un reporte por ID
router.get("/report/:id", reportController.getReportById);

// Actualizar un reporte por ID
router.put("/report/:id", reportController.updateReportById);

// Eliminar un reporte por ID
router.delete("/report/:id", reportController.deleteReportById);

module.exports = router;