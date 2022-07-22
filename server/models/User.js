const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { SALT_ROUNDS } = require("../config/env");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    validate: [
      /^[a-zA-Z]+$/,
      "first name should consist only letters"
    ],
    required: true
  },
  lastName: {
    type: String,
    validate: [
      /^[a-zA-Z]+$/,
      "last name should consist only letters"
    ],
    required: true
  },
  password: {
    type: String,
    validate: [
      /^[a-zA-Z0-9]+$/,
      "Password should consist only letters and digits",
    ],
    minlength: [6, "Your password should be at least 6 characters"],
    required: true,
  },
});

userSchema.virtual("repeatPassword").set(function (repeatPassword) {
  if (this.password !== repeatPassword) {
    throw new Error("Passwords dont match");
  }
});

userSchema.pre("save", function (next) {
  bcrypt.hash(this.password, SALT_ROUNDS).then((hashedPassword) => {
    this.password = hashedPassword;

    next();
  });
});


userSchema.index({email:1}, {
  collation: {
    locale: 'en',
    strength: 1
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
