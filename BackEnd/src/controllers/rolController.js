const Rol = require("../models/rol");

// Obtener todos los roles
const getAllRoles = async (req, res) => {
    try {
        const roles = await Rol.find();
        res.status(200).json(roles);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = getAllRoles;