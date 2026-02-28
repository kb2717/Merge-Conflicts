// const express = require("express");
// const router = express.Router();

// router.post("/register", (req, res) => {
//   console.log("✅ REGISTER ROUTE HIT");
//   res.send("Register route working");
// });

// module.exports = router;
import express from "express"
import { register, login } from "../controllers/auth.controller.js"

const router = express.Router()

router.post("/register", register)
router.post("/login", login)

export default router