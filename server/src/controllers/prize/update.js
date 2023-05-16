const { PrizeModel } = require("../../models/Prize");

exports.updateDao = async (prizeId, prize) => {
  try {
    const filter = { _id: prizeId };
    const update = { ...prize };

    let updatedPrize = await PrizeModel.findOneAndUpdate(filter, update, {
      new: true,
    }).exec();
    return {
      success: true,
      prize: updatedPrize,
    };
  } catch (err) {
    return { success: false };
  }
};
