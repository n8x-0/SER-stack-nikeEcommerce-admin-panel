const express = require("express")
const { checkAuth, logOut } = require("../controller/auth.controller")
const router = express.Router()

router.post("/", checkAuth);
router.get("/logout" ,logOut);

module.exports = router