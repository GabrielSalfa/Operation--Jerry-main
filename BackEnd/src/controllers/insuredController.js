const Insured = require("../models/insured");


exports.createInsured = async (req, res) => {
    const { name, lastname, direction, modelVehicle, patent } = req.body;

    try {
        // Verificamos si la póliza ya existe
        const insuredExistente = await Insured.findOne({ patent: patent });
        if (insuredExistente) {
            return res.status(400).json({ message: 'La póliza ya existe. Favor ingresar otra.' });
        }

        const newInsured = new Insured({
            name,
            lastname,
            direction,
            modelVehicle,
            patent
        });

        // Guardar el asegurado en la base de datos
        const insuredGuardado = await newInsured.save();
        res.status(201).json({ message: 'Asegurado creado con éxito', insured: insuredGuardado });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAllInsureds = async (req, res) => {
    try {
        const insuredList = await Insured.find();
        res.json(insuredList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getInsuredById = async (req, res) => {
    try {
        const insured = await Insured.findById(req.params.id);
        if (!insured) {
            return res.status(404).json({ message: 'Asegurado no encontrado' });
        }
        res.json(insured);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateInsuredById = async (req, res) => {
    const { name, lastname, direction, modelVehicle, patent } = req.body;

    try {
        const updatedInsured = await Insured.findByIdAndUpdate(req.params.id, {
            name,
            lastname,
            direction,
            modelVehicle,
            patent
        }, { new: true });  // { new: true } para devolver el documento modificado
        
        if (!updatedInsured) {
            return res.status(404).json({ message: 'Asegurado no encontrado' });
        }
        res.json({ message: 'Asegurado actualizado con éxito', insured: updatedInsured });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteInsuredById = async (req, res) => {
    try {
        const result = await Insured.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Asegurado no encontrado' });
        }
        res.json({ message: 'Asegurado eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};