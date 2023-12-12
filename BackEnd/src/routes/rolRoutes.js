const express = require("express");
const router = express.Router();
const getAllRoles = require("../controllers/rolController");

router.get("/roles", getAllRoles);

module.exports = router;