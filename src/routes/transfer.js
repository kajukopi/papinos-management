const router = require("express").Router()
const Transfer = require("../models/transfer.js")
const locals = {sidebar: true, title: "Transfer", message: "", error: false, scripts: ["transfer"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", handleAuthentication(4), async (req, res) => {
  res.locals = locals
  const transfers = await Transfer.find().lean()
  res.render("transfers", {transfers, email: req.session.email, firstName: req.session.firstName, lastName: req.session.lastName})
  locals.error = false
  locals.message = ""
})

router.post("/", handleAuthentication(3), async (req, res) => {
  const document = req.body
  const newTransfer = new Transfer(document)
  await newTransfer.save()
  res.redirect(req.originalUrl)
})

router.put("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const document = req.body
  const response = await Transfer.findByIdAndUpdate(id, document)
  res.json({response}).end()
})

router.patch("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const {ids, category} = req.body
  const response = await Transfer.updateMany({_id: {$in: ids}}, {$set: {category, author: req.session._id}})
  res.json({response}).end()
})

router.delete("/:id", handleAuthentication(1), async (req, res) => {
  const {id} = req.params
  const response = await Transfer.findByIdAndDelete(id)
  res.json({response}).end()
})

module.exports = router
