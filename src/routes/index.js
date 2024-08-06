const router = require("express").Router()
const bcrypt = require("bcrypt")
const short = require("short-uuid")
const db = require("../database/index")
const checkSession = require("../middleware/index")
const resLocals = {title: "TPM Total Productive Maintenance", sidebar: false, page: "index", scripts: [{script: "index"}]}

// Set Local
function setLocals(req, res, next) {
  res.locals = resLocals
  next()
}

// GET All
router.get("/", checkSession, setLocals, async function (req, res, next) {
  if (req.isValid) return res.redirect("/dashboard")
  res.render("index")
  res.locals.error = false
  res.locals.errorMessage = ""
})

// POST
router.post("/", checkSession, async function (req, res, next) {
  const method = req.query.login
  const {email, password} = req.body
  const {users, level} = db.data
  const [check] = users.filter((item) => item.email === email)
  if (method === "true") {
    if (check === undefined) return [(resLocals.error = true), (resLocals.errorMessage = "You're not registered!"), (resLocals.alert_class = "alert-danger"), res.redirect("/")]
    const match = await bcrypt.compare(password, check.password)
    if (match) {
      const uid = short.generate()
      res.cookie("uid", uid, {maxAge: 60000})
      req.session.email = email
      req.session.save()
      res.redirect("/dashboard")
    } else {
      resLocals.error = true
      resLocals.errorMessage = "Wrong username and password!"
      res.redirect("/")
    }
  } else if (method === "false") {
    if (check === undefined) {
      users.push({...req.body, password: await bcrypt.hash(password, 10)})
      const tier = {
        email: req.body.email,
        admin: false,
        staff: false,
        user: false,
        new: true,
        create: new Date().toLocaleDateString("ID-id"),
        update: new Date().toLocaleDateString("ID-id"),
      }
      level.push(tier)
      db.write()
      resLocals.error = true
      resLocals.errorMessage = "Register successfully!"
      resLocals.alert_class = "alert-primary"
      res.redirect("/")
    } else {
      resLocals.error = true
      resLocals.errorMessage = "Email already registered!"
      resLocals.alert_class = "alert-danger"
      res.redirect("/")
    }
  } else {
    res.redirect("/")
  }
})

// DELETE by ID
router.delete("/:id", checkSession, async function (req, res, next) {
  res.json({})
})

module.exports = router
