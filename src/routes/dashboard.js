const router = require("express").Router()
const Dashboard = require("../models/dashboard.js")
const locals = {sidebar: true, title: "Dashboard", message: "", error: false, scripts: ["dashboard"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", handleAuthentication(4), async (req, res) => {
  res.locals = locals
  const dashboards = await Dashboard.find().lean()
  console.log(req.session)
  res.render("dashboard", {dashboards})
  locals.error = false
  locals.message = ""
})

router.post("/", handleAuthentication(3), async (req, res) => {
  const {name, description} = req.body
  const newDashboard = new Dashboard({name, description})
  await newDashboard.save()
  res.redirect("/")
})

router.put("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  await Dashboard.findByIdAndUpdate(id, {name, description})
  res.redirect("/")
})

router.delete("/:id", handleAuthentication(1), async (req, res) => {
  const {id} = req.params
  await Dashboard.findByIdAndDelete(id)
  res.redirect("/")
})

module.exports = router
