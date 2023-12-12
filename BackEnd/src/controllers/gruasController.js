const Grua = require("../models/gruas");

exports.createGrua = async (req, res) => {
    const grua = new Grua(req.body);
    try {
        const data = await grua.save();
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllGruas = async (req, res) => {
    try {
        const data = await Grua.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getGruaById = async (req, res) => {
    try {
        const data = await Grua.findById(req.params.id);
        if (!data) return res.status(404).json({ message: 'Grúa no encontrada' });
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateGruaById = async (req, res) => {
    try {
        const data = await Grua.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) return res.status(404).json({ message: 'Grúa no encontrada' });
        res.json({ message: 'Grúa actualizada con éxito', grua: data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteGruaById = async (req, res) => {
    try {
        const data = await Grua.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ message: 'Grúa no encontrada' });
        res.json({ message: 'Grúa eliminada con éxito' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
