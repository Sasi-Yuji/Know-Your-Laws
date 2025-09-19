const express = require("express");
const router = express.Router();
const {
  getRights,
  getRightById,
  createRight,
  updateRight,
  deleteRight,
} = require("../controllers/rightsController");

router.get("/", getRights);

router.get("/:id", getRightById);

router.post("/", createRight);

router.put("/:id", updateRight);

router.delete("/:id", deleteRight);

module.exports = router;
