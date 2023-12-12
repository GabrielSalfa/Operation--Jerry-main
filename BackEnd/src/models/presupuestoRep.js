const mongoose = require("mongoose");

const presupuestoRepSchema = mongoose.Schema({
    categoria: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    tiempo_asociado: {
        type: Number,
        required: true
    },
    dia_entrega: {
        type: Date,
        required: true
    },
    monto: {
        type: Number,
        required: true
    },
    detalle_pdf: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('Presupuesto', presupuestoRepSchema);