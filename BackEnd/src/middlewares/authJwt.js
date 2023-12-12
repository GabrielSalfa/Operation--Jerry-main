

//Aqui vamos a verificar si se tienen tokens
const jwt = require('jsonwebtoken');
const Employ = require('../models/employs');
const Rol = require('../models/rol');
module.exports.verificarToken = async (req, res, next) => {
    const token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).json({ message: "Se requiere un token para autenticar" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.employId = decoded.id;

        // Aquí usamos findById en lugar de getEmployById
        const employ = await Employ.findById(req.employId).select('-password'); // Excluye la contraseña en la consulta
        if (!employ) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        next();
    } catch (error) {
        res.status(401).json({ message: 'Token inválido o expirado' });
    }
};
module.exports.isAnalistaNegocio = async (req, res, next) => {
    try {
        const employ = await Employ.findById(req.employId).populate('rol');
        if (!employ) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }

        // Como employ.rol es ahora un único objeto y no un array, la comprobación es directa
        if (employ.rol && employ.rol.name === "Analista Negocio") {
            next();
        } else {
            return res.status(403).json({ message: 'Acceso denegado. Requiere rol de Analista Negocio' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al verificar el rol' });
    }
};

module.exports.isCallCenter = async (req, res, next) => {
    try {
        const employ = await Employ.findById(req.employId).populate('rol');
        if (!employ) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }

        // Como employ.rol es ahora un único objeto y no un array, la comprobación es directa
        if (employ.rol && employ.rol.name === "Call Center") {
            next();
        } else {
            return res.status(403).json({ message: 'Acceso denegado. Requiere rol de Call Center' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al verificar el rol' });
    }
};
module.exports.isLiquidador = async (req, res, next) => {
    try {
        const employ = await Employ.findById(req.employId).populate('rol');
        if (!employ) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }

        // Como employ.rol es ahora un único objeto y no un array, la comprobación es directa
        if (employ.rol && employ.rol.name === "Liquidador") {
            next();
        } else {
            return res.status(403).json({ message: 'Acceso denegado. Requiere rol de Liquidador' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al verificar el rol' });
    }
};
module.exports.isChoferGrua = async (req, res, next) => {
    try {
        const employ = await Employ.findById(req.employId).populate('rol');
        if (!employ) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }

        // Como employ.rol es ahora un único objeto y no un array, la comprobación es directa
        if (employ.rol && employ.rol.name === "Chofer Grua") {
            next();
        } else {
            return res.status(403).json({ message: 'Acceso denegado. Requiere rol de Chofer de Grua' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al verificar el rol' });
    }
};
module.exports.isAdminTaller = async (req, res, next) => {
    try {
        const employ = await Employ.findById(req.employId).populate('rol');
        if (!employ) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }

        // Como employ.rol es ahora un único objeto y no un array, la comprobación es directa
        if (employ.rol && employ.rol.name === "Admin Taller") {
            next();
        } else {
            return res.status(403).json({ message: 'Acceso denegado. Requiere rol de Admin Taller' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al verificar el rol' });
    }
};

module.exports.isAnalistaSiniestro = async (req, res, next) => {
    try {
        const employ = await Employ.findById(req.employId).populate('rol');
        if (!employ) {
            return res.status(404).json({message: 'Empleado no encontrado'});
        }
        if (employ.rol && employ.rol.name === "Analista Siniestro") {
            next();
        } else {
            return res.status(403).json({message: 'Acceso denegado. Requiere rol de Analista Siniestro'});
        }
    }

    catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al verificar el rol' });
}
};
module.exports.isAnalistaSiniestro = async (req, res, next) => {
    try {
        const employ = await Employ.findById(req.employId).populate('rol');
        if (!employ) {
            return res.status(404).json({ message: 'Empleado no encontrado' });
        }

        // Como employ.rol es ahora un único objeto y no un array, la comprobación es directa
        if (employ.rol && employ.rol.name === "Analista Siniestro") {
            next();
        } else {
            return res.status(403).json({ message: 'Acceso denegado. Requiere rol de Analista Siniestro' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al verificar el rol' });
    }
};