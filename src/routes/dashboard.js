const router = require("express").Router()
const locals = {sidebar: true, title: "Dashboard", message: "", error: false, scripts: ["dashboard"]}
const {handleAuthentication} = require("../handler/auth")
const User = require("../models/user.js")
const Transfer = require("../models/transfer.js")

router.get("/", handleAuthentication(4), async (req, res) => {
  res.locals = locals
  const count = (await User.find()).length
  const countTransfer = (await Transfer.find()).length
  res.render("dashboard", {
    email: req.session.email,
    firstName: req.session.firstName,
    lastName: req.session.lastName,
    users: {count},
    transfers: {count: countTransfer},
  })
  locals.error = false
  locals.message = ""
})

module.exports = router
