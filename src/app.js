require("dotenv").config()
const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const methodOverride = require("method-override")
const mongoose = require("mongoose")

// Connect to MongoDB
mongoose
  .connect(process.env.DATABASE_URL)
  .then((res) => {
    console.log("Connected to mongodb!")
  })
  .catch((error) => {
    console.log(error)
  })

const routerHome = require("./routes/home")
const routerLogin = require("./routes/login")
const routerRegister = require("./routes/register")
const routerItem = require("./routes/items")

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(methodOverride("_method"))
app.use(cookieParser())
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))
app.use("/assets", express.static(path.join(__dirname, "..", "/assets")))

// Routes
app.use("/", routerHome)
app.use("/login", routerLogin)
app.use("/register", routerRegister)
app.use("/items", routerItem)

module.exports = app
