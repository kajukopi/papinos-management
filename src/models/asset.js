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
  date: {
    type: Date,
    required: true,
  },
})

const Asset = mongoose.model("Asset", assetSchema)

module.exports = Asset
