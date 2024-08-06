// models/item.js
const mongoose = require("mongoose")

const assetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const Asset = mongoose.model("Asset", assetSchema)

module.exports = Asset
