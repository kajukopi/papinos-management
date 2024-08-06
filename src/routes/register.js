const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.locals = {title: "Register Page", message: "This is express.js"}
  res.render("register")
})

router.post("/", (req, res, next) => {
  res.locals = {title: "Register Page", message: "This is express.js"}
  const {username, password} = req.body
  res.redirect(301, "/")
})

module.exports = router
