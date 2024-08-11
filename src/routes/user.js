const User = require("../models/user.js")
const router = require("express").Router()
const locals = {sidebar: true, title: "Users", message: "", error: false, scripts: ["user"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", handleAuthentication(4), async (req, res) => {
  res.locals = locals
  const users = await User.find().lean()
  console.log(users)
  res.render("users", {users, email: req.session.email, firstName: req.session.firstName, lastName: req.session.lastName})
  locals.error = false
  locals.message = ""
})

router.post("/", handleAuthentication(3), async (req, res) => {
  const newUser = new User(req.body)
  await newUser.save()
  res.redirect("/user")
})

router.put("/:email", handleAuthentication(2), async (req, res) => {
  const {email} = req.params
  const response = await User.findOneAndUpdate({email}, req.body)
  res.json({response}).end()
})

router.patch("/:id", handleAuthentication(2), async (req, res) => {
  const {id} = req.params
  const {ids, category} = req.body
  const response = await User.updateMany({_id: {$in: ids}}, {$set: {category, author: req.session._id}})
  res.json({response}).end()
})

router.delete("/:email", handleAuthentication(1), async (req, res) => {
  const {email} = req.params
  const response = await User.findOneAndDelete({email})
  res.json({response}).end()
})

module.exports = router
