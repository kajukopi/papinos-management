const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.locals = {title: "Register Page", message: "This is express.js"}
  res.render("register")
})

module.exports = router
