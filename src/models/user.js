const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  isStaff: {
    type: Boolean,
    required: true,
  },
  isUser: {
    type: Boolean,
    required: true,
  },
  subscribe: {
    type: Boolean,
    required: true,
  },
  date: {
    type: Number,
    required: true,
  },
})

const User = mongoose.model("User", userSchema)

module.exports = User
