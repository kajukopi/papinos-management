const router = require("express").Router()
const Item = require("../models/item.js")
const locals = {sidebar: true, title: "Item", message: "", error: false, scripts: ["item"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", handleAuthentication(4), async (req, res) => {
  res.locals = locals
  const items = await Item.find().lean()
  res.render("items", {items})
  locals.error = false
  locals.message = ""
})

router.post("/", handleAuthentication(3), async (req, res) => {
  const {name, description} = req.body
  const newItem = new Item({name, description})
  await newItem.save()
  res.redirect("/")
})

router.put("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  await Item.findByIdAndUpdate(id, {name, description})
  res.redirect("/")
})

router.delete("/:id", handleAuthentication(1), async (req, res) => {
  const {id} = req.params
  await Item.findByIdAndDelete(id)
  res.redirect("/")
})

module.exports = router
