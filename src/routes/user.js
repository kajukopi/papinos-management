const express = require("express")

const User = require("../models/user.js")

const router = express.Router()

router.get("/", async (req, res) => {
  res.locals = {sidebar: true, title: "", message: "", scripts: ["user"]}
  const users = await User.find().lean()
  res.render("users", {users})
})

router.post("/", async (req, res) => {
  const {name, description} = req.body
  const newUser = new User({name, description})
  await newUser.save()
  res.redirect("/")
})

router.put("/:id", async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  await User.findByIdAndUpdate(id, {name, description})
  res.redirect("/")
})

router.delete("/:id", async (req, res) => {
  const {id} = req.params
  await User.findByIdAndDelete(id)
  res.redirect("/")
})

module.exports = router
