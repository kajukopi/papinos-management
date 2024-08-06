const router = require("express").Router()

router.get("/", (req, res, next) => {
  res.locals = {title: "Hello world!", message: "This is express.js", scripts: ["index"]}
  console.log(res.locals)
  res.render("index")
})

module.exports = router
