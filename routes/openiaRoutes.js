const express = require("express");
const { generatorImage } = require("../controllers/openaiController");
const router = express.Router();

router.post("/generateimage", generatorImage);

module.exports = router;
