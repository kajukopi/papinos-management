const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.locals = {title}
  res.render("register")
})

module.exports = router
