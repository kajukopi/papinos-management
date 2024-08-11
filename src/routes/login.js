const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/user.js")
const locals = {sidebar: false, title: "Login", message: "", error: false, scripts: ["login"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", async (req, res, next) => {
  res.locals = locals
  res.render("login")
  locals.error = false
  locals.message = ""
})

router.post("/", async (req, res, next) => {
  try {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (user) {
      const match = await bcrypt.compare(password, user.password)
      if (!match) return (locals.error = true), (locals.message = "Invalid email and password!"), res.redirect("/login")
      req.session.level = "isNew"
      for (const key in user.toObject()) {
        if (key.startsWith("is")) {
          if (user.toObject()[key] === true) req.session.level = key
        }
      }
      req.session._id = user.toObject()._id
      req.session.email = user.toObject().firstName
      req.session.firstName = user.toObject().firstName
      req.session.lastName = user.toObject().lastName
      req.session.save()
      return res.redirect("/dashboard")
    } else {
      console.log("User not found")
      return (locals.error = true), (locals.message = "Invalid email and password!"), res.redirect("/login")
    }
  } catch (err) {
    return res.render("login", {err})
  }
})

module.exports = router
