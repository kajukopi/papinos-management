// models/item.js
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: false,
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
})

const User = mongoose.model("User", userSchema)

module.exports = User
