const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.locals = {title: "Login Page", message: ""}
  res.render("login")
})

router.post("/", (req, res, next) => {
  res.locals = {title: "Login Page", message: ""}
  const {username, password} = req.body
  res.redirect(301, "/")
})

module.exports = router
