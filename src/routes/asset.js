const router = require("express").Router()
const Asset = require("../models/item.js")
const locals = {sidebar: true, title: "Assets", message: "", error: false, scripts: ["asset"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", handleAuthentication(4), async (req, res) => {
  res.locals = locals
  const assets = await Asset.find().lean()
  res.render("assets", {assets})
  locals.error = false
  locals.message = ""
})

router.post("/", handleAuthentication(3), async (req, res) => {
  const {name, description} = req.body
  const newItem = new Asset({name, description})
  await newItem.save()
  res.redirect("/")
})

router.put("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  await Asset.findByIdAndUpdate(id, {name, description})
  res.redirect("/")
})

router.delete("/:id", handleAuthentication(1), async (req, res) => {
  const {id} = req.params
  await Asset.findByIdAndDelete(id)
  res.redirect("/")
})

module.exports = router
