const expres = require("express");
const router = expres.Router();
const employController = require('../controllers/employController');
const gruasController = require('../controllers/gruasController');
const { verificarToken, isAnalistaNegocio } = require('../middlewares/authJwt');

//Rutas directas relacionadas a empleado
router.post("/employs",[verificarToken, isAnalistaNegocio], employController.crearempleado);
router.get("/employs",employController.getAllEmploys);
router.get("/employs/:id",[verificarToken, isAnalistaNegocio], employController.getEmployById);
router.put("/employs/:id", [verificarToken, isAnalistaNegocio],employController.updateEmployById);
router.delete("/employs/:id",[verificarToken, isAnalistaNegocio], employController.deleteEmployById);
router.post('/login', employController.login);

//Para la consulta de gruas. Según el enunciado, lo revisa el analista.
router.get("/gruas", [verificarToken, isAnalistaNegocio], gruasController.getGruaById);


module.exports = router;