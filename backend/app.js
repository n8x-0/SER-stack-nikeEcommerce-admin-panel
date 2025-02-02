require("dotenv").config()
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const cors = require("cors")
const serverless = require("serverless-http");
const adminRoutes = require("./routes/admin.routes")
const authRoutes = require("./routes/auth.routes")
const testRoutes = require("./routes/test.routes")

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
app.use("/api", testRoutes)

module.exports = serverless(app);
