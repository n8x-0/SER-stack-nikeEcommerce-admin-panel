const express = require("express")
const { getOrders } = require("../controller/admin.controller")
const { authenticate } = require("../middleware/middleware")
const router = express.Router()

router.get("/admin", authenticate, getOrders)

module.exports = router