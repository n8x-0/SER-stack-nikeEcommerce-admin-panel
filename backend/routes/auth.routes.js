const express = require("express")
const { checkAuth } = require("../controller/auth.controller")
const { logOut } = require("../controller/auth.controller")
const router = express.Router()

<<<<<<< HEAD
router.post("/", checkAuth);
router.get("/logout" ,logOut);
=======
router.post("/", checkAuth)
router.get("/logout" ,logOut)
>>>>>>> 7f07386e89aa5d8ef57121ed9be6e2e4233ff4dc

module.exports = router