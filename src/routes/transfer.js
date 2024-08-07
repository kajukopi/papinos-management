const router = require("express").Router()
const Transfer = require("../models/transfer.js")
const locals = {sidebar: true, title: "Transfer", message: "", error: false, scripts: ["transfer"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", handleAuthentication(4), async (req, res) => {
  res.locals = locals
  const transfers = await Transfer.find().lean()
  res.render("transfers", {transfers})
  locals.error = false
  locals.message = ""
})

router.post("/", handleAuthentication(3), async (req, res) => {
  const {name, description} = req.body
  const newTransfer = new Transfer({name, description})
  await newTransfer.save()
  res.redirect("/")
})

router.put("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  await Transfer.findByIdAndUpdate(id, {name, description})
  res.redirect("/")
})

router.delete("/:id", handleAuthentication(1), async (req, res) => {
  const {id} = req.params
  await Transfer.findByIdAndDelete(id)
  res.redirect("/")
})

module.exports = router
