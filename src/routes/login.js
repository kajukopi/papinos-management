const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.locals = {title: "Login Page", message: "This is express.js"}
  res.render("login")
})

module.exports = router
