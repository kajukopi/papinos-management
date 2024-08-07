const router = require("express").Router()
const locals = {sidebar: false, title: "Home", message: "", error: false, scripts: ["index"]}
const {handleAuthentication} = require("../handler/auth")

router.get("/", (req, res, next) => {
  res.locals = locals
  res.render("index")
  locals.error = false
  locals.message = ""
})

module.exports = router
