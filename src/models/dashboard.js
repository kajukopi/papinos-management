// models/item.js
const mongoose = require("mongoose")

const dashboardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const Dashboard = mongoose.model("Dashboard", dashboardSchema)

module.exports = Dashboard
