const express = require("express")

const Asset = require("../models/item.js")

const router = express.Router()

router.get("/", async (req, res) => {
  res.locals = {title: "Assets", message: "", scripts: ["assets"]}
  const assets = await Asset.find().lean()
  res.render("assets", {assets})
})

router.post("/", async (req, res) => {
  const {name, description} = req.body
  const newItem = new Asset({name, description})
  await newItem.save()
  res.redirect("/")
})

router.put("/:id", async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  await Asset.findByIdAndUpdate(id, {name, description})
  res.redirect("/")
})

router.delete("/:id", async (req, res) => {
  const {id} = req.params
  await Asset.findByIdAndDelete(id)
  res.redirect("/")
})

module.exports = router
