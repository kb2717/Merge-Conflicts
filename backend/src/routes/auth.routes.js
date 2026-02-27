const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  console.log("✅ REGISTER ROUTE HIT");
  res.send("Register route working");
});

module.exports = router;