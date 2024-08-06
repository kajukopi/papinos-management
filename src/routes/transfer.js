const express = require("express")

const Transfer = require("../models/transfer.js")

const router = express.Router()

router.get("/", async (req, res) => {
  res.locals = {title: "", message: "", scripts: ["transfer"]}
  const transfers = await Transfer.find().lean()
  res.render("transfers", {transfers})
})

router.post("/", async (req, res) => {
  const {name, description} = req.body
  const newTransfer = new Transfer({name, description})
  await newTransfer.save()
  res.redirect("/")
})

router.put("/:id", async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  await Transfer.findByIdAndUpdate(id, {name, description})
  res.redirect("/")
})

router.delete("/:id", async (req, res) => {
  const {id} = req.params
  await Transfer.findByIdAndDelete(id)
  res.redirect("/")
})

module.exports = router
