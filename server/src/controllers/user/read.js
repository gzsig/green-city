const { UserModel } = require("../../models/User");

const readDao = async (userId) => {
  try {
    const user = await UserModel.findById(userId).exec();
    return {
      success: true,
      user,
    };
  } catch (err) {
    return { success: false };
  }
};

exports.read = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await readDao(id);
    console.log(result);
    if (result.success) {
      res.status(200).json({ user: result.user });
    } else {
      res.status(400).end();
    }
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};
