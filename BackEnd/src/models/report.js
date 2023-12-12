const mongoose = require("mongoose");
const reportSchema = mongoose.Schema({
    tipo_vehiculo: {
        type: String,
        required: true
    },
    resultados_talleres: {
        type: [String], // Lista de resultados
        required: true
    },
    lugares_solicitados_region: {
        type: [String], // Lista de regiones
        required: true
    },
    lugares_solicitados_ciudad: {
        type: [String], // Lista de ciudades
        required: true
    }

});

module.exports = mongoose.model('Reporte', reportSchema);