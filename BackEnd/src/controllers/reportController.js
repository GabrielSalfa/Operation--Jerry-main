const Report = require("../models/report");

exports.createReport = async (req, res) => {
    const report = new Report(req.body);
    try {
        const data = await report.save();
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getAllReports = async (req, res) => {
    try {
        const data = await Report.find();
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getReportById = async (req, res) => {
    try {
        const data = await Report.findById(req.params.id);
        if (!data) return res.status(404).json({ message: 'Reporte no encontrado' });
        res.json(data);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateReportById = async (req, res) => {
    try {
        const data = await Report.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!data) return res.status(404).json({ message: 'Reporte no encontrado' });
        res.json({ message: 'Reporte actualizado con éxito', report: data });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteReportById = async (req, res) => {
    try {
        const data = await Report.findByIdAndDelete(req.params.id);
        if (!data) return res.status(404).json({ message: 'Reporte no encontrado' });
        res.json({ message: 'Reporte eliminado con éxito' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};