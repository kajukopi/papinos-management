const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.locals.title = "Hello world!"
  res.locals.message = "This is express.js"
  res.render("index")
})

module.exports = router
