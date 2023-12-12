const mongoose = require("mongoose");

const rolSchema = new mongoose.Schema({
    name: String 
}, 
{
    versionKey: false
})

module.exports = mongoose.model('Rol', rolSchema);


