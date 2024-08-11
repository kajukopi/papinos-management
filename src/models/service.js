const {Schema, model} = require("mongoose")

const serviceSchema = new Schema({
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

const Service = model("Service", serviceSchema)

module.exports = Service
