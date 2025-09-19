const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Viral routes working..." });
});

module.exports = router;
