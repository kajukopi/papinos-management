const express = require("express")

const Dashboard = require("../models/dashboard.js")

const router = express.Router()

router.get("/", async (req, res) => {
  res.locals = {title: "Dashboard", message: "", scripts: ["dashboard"]}
  const dashboards = await Dashboard.find().lean()
  res.render("dashboards", {dashboards})
})

router.post("/", async (req, res) => {
  const {name, description} = req.body
  const newDashboard = new Dashboard({name, description})
  await newDashboard.save()
  res.redirect("/")
})

router.put("/:id", async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  await Dashboard.findByIdAndUpdate(id, {name, description})
  res.redirect("/")
})

router.delete("/:id", async (req, res) => {
  const {id} = req.params
  await Dashboard.findByIdAndDelete(id)
  res.redirect("/")
})

module.exports = router
