const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "can't be empty"],
    minLength: [5, "Name must be atleast 5 characters"],
    maxLength: [15, "Name must be atmost 15 characters"],
  },
  email: {
    type: String,
    required: [true, "can't be empty"],
  },
  password: {
    type: String,
    required: [true, "can't be empty"],
    minLength: [8, "Name must be atleast 8 characters"],
    maxLength: [16, "Name must be atmost 16 characters"],
    select: false,
  },
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  const k = await bcrypt.compare(enteredPassword, this.password);

  return k;
};
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", userSchema);
