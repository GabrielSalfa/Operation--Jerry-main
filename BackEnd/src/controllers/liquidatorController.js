const Liquidator = require("../models/liquidator");

exports.createLiquidator = async (req, res) => {
  try {
    const {
      accident,
      agency,
      tow,
      workshop,
      repair,
      time,
      desc,
      deliver,
      cost,
    } = req.body;

    const liquidator = new Liquidator({
      accident,
      agency,
      tow,
      workshop,
      repair,
      time,
      desc,
      deliver,
      cost,
    });

    const savedLiquidator = await liquidator.save();
    res.status(201).json(savedLiquidator);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
