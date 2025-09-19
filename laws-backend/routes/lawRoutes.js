const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Law = require("../models/Law");

const uploadDir = path.join(__dirname, "..", "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });


router.post("/", upload.single("image"), async (req, res) => {
  try {
    const law = new Law({
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      image: req.file ? req.file.filename : null,
    });

    const saved = await law.save();
    return res.status(201).json(saved);
  } catch (err) {
    console.error("Create law error:", err);
    return res.status(400).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const laws = await Law.find().sort({ _id: -1 });
    res.json(laws);
  } catch (err) {
    console.error("Get laws error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const law = await Law.findById(req.params.id);
    if (!law) return res.status(404).json({ message: "Not found" });
    res.json(law);
  } catch (err) {
    console.error("Get law by id error:", err);
    res.status(500).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Law.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    console.error("Delete law error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
