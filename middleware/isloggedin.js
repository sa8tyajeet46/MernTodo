module.exports.isloggedin = async (req, res, next) => {
  console.log(req.user);
  if (req.user) {
    return next();
  }
  return res.status(401).json({ sucess: false, message: "login to continue" });
};
