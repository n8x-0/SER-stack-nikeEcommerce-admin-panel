require("dotenv").config()
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")
const adminRoutes = require("./routes/admin.routes")
const authRoutes = require("./routes/auth.routes")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST'],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}))

app.use("/", adminRoutes)
app.use("/auth", authRoutes)

app.listen("3000", ()=> console.log(`server is running\nhttp://localhost:3000`))