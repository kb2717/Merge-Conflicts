const express = require("express");
const router = express.Router();
const { getMatches } = require("../controllers/match.controller");

router.get("/:userId", getMatches);

module.exports = router;