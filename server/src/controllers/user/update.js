const { UserModel } = require("../../models/User");

const updateDao = async (userId, user) => {
  try {
    const filter = { _id: userId };
    const update = { ...user };

    let updatedUser = await UserModel.findOneAndUpdate(filter, update, {
      new: true,
    }).exec();
    return {
      success: true,
      user: updatedUser,
    };
  } catch (err) {
    return { success: false };
  }
};

exports.update = async (req, res) => {
  const { id, userUpdates } = req.body;
  try {
    const result = await updateDao(id, userUpdates);
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
