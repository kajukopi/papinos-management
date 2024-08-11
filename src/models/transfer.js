const {Schema, model} = require("mongoose")

const transferSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: Boolean,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  author: {type: Schema.Types.ObjectId, ref: "User"},
})

const Transfer = model("Transfer", transferSchema)

module.exports = Transfer
