const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.locals = {sidebar: false, title: "Login Page", message: ""}
  res.render("login")
})

router.post("/", (req, res, next) => {
  const {username, password} = req.body
  res.redirect(301, "/")
})

module.exports = router
