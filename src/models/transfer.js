// models/item.js
const mongoose = require("mongoose")

const transferSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const Transfer = mongoose.model("Transfer", transferSchema)

module.exports = Transfer
