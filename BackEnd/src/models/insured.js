const mongoose = require("mongoose");

const insuredSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    direction:{
        type: String,
        required: true
    },
    modelvehicle: {
        type: String,
        required: true
    },
    patent: {
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
    }
});




module.exports = mongoose.model('Insureds',insuredSchema);