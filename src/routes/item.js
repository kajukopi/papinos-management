const express = require("express")

const Item = require("../models/item.js")

const router = express.Router()

router.get("/", async (req, res) => {
  res.locals = {title: "", message: "", scripts: ["index"]}
  const items = await Item.find().lean()
  res.render("items", {items})
})

router.post("/", async (req, res) => {
  const {name, description} = req.body
  const newItem = new Item({name, description})
  await newItem.save()
  res.redirect("/")
})

router.put("/:id", async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  await Item.findByIdAndUpdate(id, {name, description})
  res.redirect("/")
})

router.delete("/:id", async (req, res) => {
  const {id} = req.params
  await Item.findByIdAndDelete(id)
  res.redirect("/")
})

module.exports = router
