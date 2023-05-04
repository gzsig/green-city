const { UserModel } = require("../../models/User");

const getDao = async (userId) => {
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

exports.get = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await getDao(id);
    console.log(result);
    if (result.success) {
      res.status(200).json({ user: result.user }).end();
    } else {
      res.status(400).end();
    }
  } catch (error) {
    console.log(error);
    res.status(500).end();
  }
};
