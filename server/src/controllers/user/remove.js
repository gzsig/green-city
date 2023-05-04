const { UserModel } = require("../../models/User");

const removeDao = async (userId) => {
  try {
    await UserModel.findByIdAndDelete(userId).exec();
    return {
      success: true,
    };
  } catch (err) {
    return { success: false };
  }
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await removeDao(id);
    console.log(result);
    if (result.success) {
      res.status(200).end();
    } else {
      res.status(400).end();
    }
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};
