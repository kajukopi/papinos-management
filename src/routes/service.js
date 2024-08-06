const express = require("express")

const Service = require("../models/service.js")

const router = express.Router()

router.get("/", async (req, res) => {
  res.locals = {title: "", message: "", scripts: ["service"]}
  const services = await Service.find().lean()
  res.render("services", {services})
})

router.post("/", async (req, res) => {
  const {name, description} = req.body
  const newService = new Service({name, description})
  await newService.save()
  res.redirect("/")
})

router.put("/:id", async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  await Service.findByIdAndUpdate(id, {name, description})
  res.redirect("/")
})

router.delete("/:id", async (req, res) => {
  const {id} = req.params
  await Service.findByIdAndDelete(id)
  res.redirect("/")
})

module.exports = router
