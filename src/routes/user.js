const User = require("../models/user.js")
const router = require("express").Router()
const locals = {sidebar: true, title: "Users", message: "", error: false, scripts: ["user"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", handleAuthentication(4), async (req, res) => {
  res.locals = locals
  const users = await User.find().lean()
  res.render("users", {users})
  locals.error = false
  locals.message = ""
})

router.post("/", handleAuthentication(3), async (req, res) => {
  const {name, description} = req.body
  const newUser = new User({name, description})
  await newUser.save()
  res.redirect("/")
})

router.put("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const {name, description} = req.body
  await User.findByIdAndUpdate(id, {name, description})
  res.redirect("/")
})

router.delete("/:id", handleAuthentication(1), async (req, res) => {
  const {id} = req.params
  await User.findByIdAndDelete(id)
  res.redirect("/")
})

module.exports = router
