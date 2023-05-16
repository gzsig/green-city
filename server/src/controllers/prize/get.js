const { PrizeModel } = require("../../models/Prize");

exports.getDao = async (prizeId) => {
  try {
    const prize = await PrizeModel.findById(prizeId).exec();
    return {
      success: true,
      prize,
    };
  } catch (err) {
    return { success: false };
  }
};
