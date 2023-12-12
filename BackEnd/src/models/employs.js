const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const employSchema = mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    rol: {
        ref: "Rol",
        type: mongoose.Schema.Types.ObjectId,
        required: true // Asegúrate de que el rol sea obligatorio
    }
}, {
    timestamps: true,
    versionKey: false
});
//Hashear contraseña
employSchema.pre('save', function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    bcrypt.hash(this.password, saltRounds, (err, hash) => {
        if (err) {
            return next(err);
        }
        this.password = hash;
        next();
    });
});
//Comparar contraseña ingresada
employSchema.statics.comparePassword = async (password, passwordRecibida) =>{
    return await bcrypt.compare(password,passwordRecibida)
};
module.exports = mongoose.model('Employs',employSchema);