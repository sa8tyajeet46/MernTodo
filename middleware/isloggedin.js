module.exports.isloggedin = async (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ sucess: false, message: "login to continue" });
};
