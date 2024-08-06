const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const methodOverride = require("method-override")

const homeRouter = require("./routes/home")
const homeLogin = require("./routes/login")
const homeRegister = require("./routes/register")

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))
app.use("/assets", express.static(path.join(__dirname, "..", "/assets")))

// Routes
app.use("/", homeRouter)
app.use("/login", homeLogin)
app.use("/register", homeRegister)

module.exports = app
