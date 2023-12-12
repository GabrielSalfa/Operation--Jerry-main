const mongoose = require("mongoose");

const gruaSchema = mongoose.Schema({
    taller: {
        type: String,
        required: true
    },
    patentG: {
        type: String,
        required: true,
        unique:true,
        set: v => v.toUpperCase(),
        validate: {
            validator: function(v) {
                return v.length === 6;
            },
            message: props => `${props.value} debe tener exactamente 6 caracteres`
        }
    },
    chofer: {
        type: String,
        required: true
    },
    directionRef: {
        type: String,
        required: true
    },
    punto_retiro: {
        type: String,
        required: true
    },
    direccion_destino: {
        type: String,
        required: true
    },
    marca_vehiculo_retirado: {
        type: String,
        required: true
    },
    modelo_vehiculo_retirado: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Gruas',gruaSchema);