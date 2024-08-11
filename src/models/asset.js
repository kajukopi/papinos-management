const {Schema, model} = require("mongoose")

const assetSchema = new Schema({
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

const Asset = model("Asset", assetSchema)

module.exports = Asset
