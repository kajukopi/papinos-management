const {Schema, model} = require("mongoose")

const maintenanceSchema = new Schema({
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

const Maintenance = model("Maintenance", maintenanceSchema)

module.exports = Maintenance
