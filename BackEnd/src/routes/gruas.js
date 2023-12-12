const express = require("express");
const router = express.Router();

const gruaController = require('../controllers/gruasController'); // Asegúrate de ajustar la ruta al archivo correcto

// Crear una nueva grúa
router.post("/gruas", gruaController.createGrua);

// Obtener todas las grúas
router.get("/gruas", gruaController.getAllGruas);

// Obtener una grúa por ID
router.get("/gruas/:id", gruaController.getGruaById);

// Actualizar una grúa por ID
router.put("/gruas/:id", gruaController.updateGruaById);

// Eliminar una grúa por ID
router.delete("/gruas/:id", gruaController.deleteGruaById);

module.exports = router;