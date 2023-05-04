const { UserModel } = require("../../models/User");

const insertDao = async (user) => {
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

exports.insert = async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await insertDao({ username, password });
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
