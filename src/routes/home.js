const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.locals = {title: "Homepage", message: "", scripts: ["index"]}
  res.render("index")
})

module.exports = router
