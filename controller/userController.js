const User = require("./../models/usermodel");

const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(403)
        .json({ sucess: false, message: "user already exists" });
    }
    await User.create({ name, email, password });
    return res
      .status(201)
      .json({ sucess: true, message: "User created successfully" });
  } catch (err) {
    // console.log(err);
    return res.status(500).json({ sucess: false, message: err.message });
  }
};

const login = async (req, res, next) => {
  try {
    const user = req.user;
    return res.status(201).json({ sucess: true, user });
  } catch (err) {
    // console.log(err);
    return res.status(500).json({ sucess: false, message: err.message });
  }
};

const logout = async (req, res, next) => {
  // try {
  //   req.logout();
  //   return res.status(201).json({ sucess: true });
  // } catch (err) {
  //   // console.log(err);
  //   return res.status(500).json({ sucess: false, message: err.message });
  // }
  req.logout(function (err) {
    if (err) {
      return res.status(500).json({ sucess: false, message: err.message });
    }
    return res.status(201).json({ sucess: true });
  });
};

const profile = async (req, res, next) => {
  try {
    const user = req.user;
    return res.status(201).json({ sucess: true, user });
  } catch (err) {
    // console.log(err);
    return res.status(500).json({ sucess: false, message: err.message });
  }
};

module.exports = { register, login, logout, profile };
