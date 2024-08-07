require("dotenv").config()
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const session = require("express-session")
const logger = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to mongodb!")
  })
  .catch((error) => {
    console.log(error)
  })

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))
app.use(cookieParser())
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))
app.use("/assets", express.static(path.join(__dirname, "..", "/assets")))
app.use(
  session({
    secret: "karimroy",
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 30000},
  })
)

// Routes
app.use("/", require("./routes/home"))
app.use("/login", require("./routes/login"))
app.use("/register", require("./routes/register"))
app.use("/item", require("./routes/item"))
app.use("/user", require("./routes/user"))
app.use("/transfer", require("./routes/transfer"))
app.use("/service", require("./routes/service"))
app.use("/maintenance", require("./routes/maintenance"))
app.use("/dashboard", require("./routes/dashboard"))
app.use("/asset", require("./routes/asset"))
app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login")
  })
})

module.exports = app
