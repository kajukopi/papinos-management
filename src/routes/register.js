const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.locals = {sidebar: false, title: "Register Page", message: ""}
  res.render("register")
})

router.post("/", (req, res, next) => {
  const {username, password} = req.body
  res.redirect(301, "/")
})

module.exports = router
