const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const methodOverride = require("method-override")

const homeRouter = require("./routes/home")

const app = express()

app.use(logger("dev"))
app.use(express.json())
app.use(methodOverride("_method"))
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))
app.use(express.static(path.join(__dirname, "..", "public")))

// Routes
app.use("/", homeRouter)

module.exports = app
