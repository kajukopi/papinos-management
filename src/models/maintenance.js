const mongoose = require("mongoose")

const maintenanceSchema = new mongoose.Schema({
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

const Maintenance = mongoose.model("Maintenance", maintenanceSchema)

module.exports = Maintenance
