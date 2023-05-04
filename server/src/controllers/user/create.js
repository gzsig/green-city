const { UserModel } = require("../../models/User");

const createDao = async (user) => {
  const { username, password } = user;
  const newUser = new UserModel({ username, password });
  try {
    await newUser.save();
    return {
      success: true,
      user: newUser,
    };
  } catch (err) {
    return { success: false };
  }
};

exports.create = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await createDao({ username, password });
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
