const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    //toDo validate email
    unique: true,
    minlength: [5, "Username cannot be with less then 5 characters"],
  },
  username: {
    type: String,
    required: true,
    validate: [/^[a-zA-Z0-9]+$/, "Username should consist only letters and digits"],
    unique: true,
    minlength: [5, "Username cannot be with less then 5 characters"],
  },
  password: {
    type: String,
    validate: [
      /^[a-zA-Z0-9]+$/,
      "Password should consist only letters and digits",
    ],
    minlength: [8, "Your password should be at least 6 characters"],
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;