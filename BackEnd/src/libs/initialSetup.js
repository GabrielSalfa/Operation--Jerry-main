const Rol = require("../models/rol"); 

const createRoles = async () => {
    try {
        const count = await Rol.countDocuments();
        if (count > 0) return;

        const values = await Promise.all([
            new Rol({ name: 'Call Center' }).save(),
            new Rol({ name: 'Analista Siniestro' }).save(),
            new Rol({ name: 'Liquidador' }).save(),
            new Rol({ name: 'Analista Negocio' }).save(),
            new Rol({ name: 'Chofer Grua' }).save(),
            new Rol({ name: 'Admin Taller' }).save(),
        ]);
        console.log(values);
    } catch (error) {
        console.error(error);
    }
};

module.exports = { createRoles };
