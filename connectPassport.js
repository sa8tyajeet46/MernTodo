const localStrategy = require("passport-local");
const User = require("./models/usermodel");
module.exports.connectPassport = (passport) => {
  passport.use(
    new localStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ email: username }).select(
          "+password"
        );

        if (!user)
          return done(null, false, { message: "user doesnot exists " });

        if (!(await user.comparePassword(password))) {
          return done(null, false, { message: "wrong username or password " });
        }

        return done(null, user);
      } catch (err) {
        return done(err, false);
      }
    })
  );
  passport.serializeUser((user, done) => {
    if (user) {
      return done(null, user.id);
    }
    return done(null);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);

      return done(null, user);
    } catch (err) {
      return done(err, false);
    }
  });
};
