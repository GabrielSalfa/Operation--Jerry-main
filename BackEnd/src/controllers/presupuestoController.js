const Presupuesto = require("../models/presupuestoRep");

exports.createPresupuesto = async (req, res) => {
    const presupuesto = new Presupuesto(req.body);
    try {
        const data = await presupuesto.save();
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllPresupuestos = async (req, res) => {
    try {
        const data = await Presupuesto.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getPresupuestoById = async (req, res) => {
    try {
        const data = await Presupuesto.findById(req.params.id);
        if (!data) return res.status(404).json({ message: 'Presupuesto no encontrado' });
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updatePresupuestoById = async (req, res) => {
    try {
        const data = await Presupuesto.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) return res.status(404).json({ message: 'Presupuesto no encontrado' });
        res.json({ message: 'Presupuesto actualizado con éxito', presupuesto: data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePresupuestoById = async (req, res) => {
    try {
        const data = await Presupuesto.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ message: 'Presupuesto no encontrado' });
        res.json({ message: 'Presupuesto eliminado con éxito' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};