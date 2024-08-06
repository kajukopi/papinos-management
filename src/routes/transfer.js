const router = require("express").Router()
const db = require("../database")
const checkSession = require("../middleware/index")

function setLocals(req, res, next) {
  res.locals = {title: "Transfer", sidebar: true, page: "transfer", scripts: [{script: "transfer"}]}
  next()
}

// GET All
router.get("/",checkSession, setLocals, function (req, res, next) {
  if (!req.isValid) return res.redirect("/")
  res.render("transfer")
})

// POST
router.post("/",checkSession, function (req, res, next) {
  res.json({})
})

// DELETE by ID
router.delete("/:id",checkSession, function (req, res, next) {
  res.json({})
})

module.exports = router
