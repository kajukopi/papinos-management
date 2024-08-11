const {Schema, model} = require("mongoose")

const itemSchema = new Schema({
  name: {
    type: String,
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

const Item = model("Item", itemSchema)

module.exports = Item
