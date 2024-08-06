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
  photo: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: false,
  },
  isStaff: {
    type: Boolean,
    required: true,
  },
  isUser: {
    type: Boolean,
    required: true,
  },
  isNew: {
    type: Boolean,
    required: true,
  },
})

const User = mongoose.model("User", userSchema)

module.exports = User
