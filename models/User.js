const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a user."],
    unique: true,
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters."],
  },
  email: {
    type: String,
    required: [true, "Please add a email."],
    unique: true,
    trim: true,
    maxlength: [50, "Email cannot be more than 50 characters."],
  },
  password: {
    type: String,
    required: [true, "Please add a password."],
    unique: true,
    trim: true,
    maxlength: [50, "Password cannot be more than 50 characters."],
  },
});

module.exports = mongoose.models.User || mongoose.model("User", UserSchema);
