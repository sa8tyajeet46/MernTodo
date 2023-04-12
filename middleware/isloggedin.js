module.exports.isloggedin = async (req, res, next) => {
  if (req.user) {
    return next();
  }
  return res.status(401).json({ sucess: false, message: "login to continue" });
};
