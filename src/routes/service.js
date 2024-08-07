const router = require("express").Router()
const Service = require("../models/service.js")
const locals = {sidebar: true, title: "Services", message: "", error: false, scripts: ["service"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", handleAuthentication(4), async (req, res) => {
  res.locals = locals
  const services = await Service.find().lean()
  res.render("services", {services})
  locals.error = false
  locals.message = ""
})

router.post("/", handleAuthentication(3), async (req, res) => {
  const {name, description} = req.body
  const newService = new Service({name, description})
  await newService.save()
  res.redirect("/")
})

router.put("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  await Service.findByIdAndUpdate(id, {name, description})
  res.redirect("/")
})

router.delete("/:id", handleAuthentication(1), async (req, res) => {
  const {id} = req.params
  await Service.findByIdAndDelete(id)
  res.redirect("/")
})

module.exports = router
