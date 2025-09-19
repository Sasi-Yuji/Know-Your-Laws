const express = require("express");
const router = express.Router();
const {
  getLegalTips,
  addLegalTip,
  updateLegalTip,
  deleteLegalTip
} = require("../controllers/legalTipsController");

router.get("/", getLegalTips);

router.post("/", addLegalTip);

router.put("/:id", updateLegalTip);

router.delete("/:id", deleteLegalTip);

module.exports = router;
