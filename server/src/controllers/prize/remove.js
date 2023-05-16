const { PrizeModel } = require("../../models/Prize");

exports.removeDao = async (prizeId) => {
  try {
    await PrizeModel.findByIdAndDelete(prizeId).exec();
    return {
      success: true,
    };
  } catch (err) {
    return { success: false };
  }
};
