const { PrizeModel } = require("../../models/Prize");

exports.insertDao = async (prize) => {
  const { name, description, points, quantity } = prize;
  const newPrize = new PrizeModel({ name, description, points, quantity });
  try {
    await newPrize.save();
    return {
      success: true,
      prize: newPrize,
    };
  } catch (err) {
    return { success: false };
  }
};
