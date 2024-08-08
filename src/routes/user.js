const User = require("../models/user.js")
const router = require("express").Router()
const locals = {sidebar: true, title: "Users", message: "", error: false, scripts: ["user"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", handleAuthentication(4), async (req, res) => {
  res.locals = locals
  const users = await User.find().lean()
  console.log(users);
  res.render("users", {users})
  locals.error = false
  locals.message = ""
})

router.post("/", handleAuthentication(3), async (req, res) => {
  const newUser = new User(req.body)
  await newUser.save()
  res.redirect("/")
})

router.put("/:email", handleAuthentication(2), async (req, res) => {
  const {email} = req.params
  await User.findOneAndUpdate({email}, req.body)
  res.redirect("/")
})

router.delete("/:email", handleAuthentication(1), async (req, res) => {
  const {email} = req.params
  await User.findOneAndDelete({email})
  res.redirect("/")
})

module.exports = router
