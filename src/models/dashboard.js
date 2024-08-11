const {Schema, model} = require("mongoose")

const dashboardSchema = new Schema({
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

const Dashboard = model("Dashboard", dashboardSchema)

module.exports = Dashboard
