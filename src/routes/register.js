const router = require("express").Router()
const bcrypt = require("bcrypt")
const User = require("../models/user.js")
const locals = {sidebar: false, title: "Register", message: "", error: false, scripts: ["register"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", (req, res, next) => {
  res.locals = locals
  res.render("register")
  locals.error = false
  locals.message = ""
})

router.post("/", async (req, res, next) => {
  try {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (user) {
      console.log("Found user:", user)
      return (locals.error = true), (locals.message = "email already registered!"), res.redirect("/register")
    } else {
      const body = {...req.body, subscribe: req.body.subscribe === "true" ? true : false, password: await bcrypt.hash(password, 10), isAdmin: false, isStaff: false, isUser: false, date: new Date().getTime()}
      const newUser = new User(body)
      await newUser.save()
      return res.redirect("/login")
    }
  } catch (err) {
    return res.render("register", {err})
  }
})

module.exports = router
