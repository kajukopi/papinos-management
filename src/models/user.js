const {Schema, model} = require("mongoose")

const userSchema = new Schema({
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
  createAt: {
    type: Date,
    default: Date.now,
  },
})

userSchema.statics.findByEmail = function (email) {
  return this.findOne(email)
}

const User = model("User", userSchema)

module.exports = User
