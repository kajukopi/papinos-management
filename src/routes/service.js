const router = require("express").Router()
const Service = require("../models/service.js")
const locals = {sidebar: true, title: "Services", message: "", error: false, scripts: ["service"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", handleAuthentication(4), async (req, res) => {
  res.locals = locals
  const services = await Service.find().lean()
  res.render("services", {services, email: req.session.email, firstName: req.session.firstName, lastName: req.session.lastName})
  locals.error = false
  locals.message = ""
})

router.post("/", handleAuthentication(3), async (req, res) => {
  const {name, description} = req.body
  const newService = new Service({name, description})
  await newService.save()
  res.redirect("/service")
})

router.put("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  const response = await Service.findByIdAndUpdate(id, {name, description})
  res.json(response).end()
})

router.patch("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const {ids, category} = req.body
  const response = await Service.updateMany({_id: {$in: ids}}, {$set: {category, author: req.session._id}})
  res.json({response}).end()
})

router.delete("/:id", handleAuthentication(1), async (req, res) => {
  const {id} = req.params
  const response = await Service.findByIdAndDelete(id)
  res.json(response).end()
})

module.exports = router
