const router = require("express").Router()
const Asset = require("../models/item.js")
const locals = {sidebar: true, title: "Assets", message: "", error: false, scripts: ["asset"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", handleAuthentication(4), async (req, res) => {
  res.locals = locals
  const assets = await Asset.find().lean()
  res.render("assets", {assets, email: req.session.email, firstName: req.session.firstName, lastName: req.session.lastName})
  locals.error = false
  locals.message = ""
})

router.post("/", handleAuthentication(3), async (req, res) => {
  const {name, description} = req.body
  const newItem = new Asset({name, description, author: req.session._id})
  await newItem.save()
  res.redirect("/")
})

router.put("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  const response = await Asset.findByIdAndUpdate(id, {name, description, author: req.session._id})
  res.json({response}).end()
})

router.patch("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const {ids, category} = req.body
  const response = await Asset.updateMany({_id: {$in: ids}}, {$set: {category, author: req.session._id}})
  res.json({response}).end()
})

router.delete("/:id", handleAuthentication(1), async (req, res) => {
  const {id} = req.params
  const response = await Asset.findByIdAndDelete(id)
  res.json({response}).end()
})

module.exports = router
