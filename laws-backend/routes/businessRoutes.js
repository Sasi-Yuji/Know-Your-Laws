const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const businessController = require("../controllers/businessController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});
const upload = multer({ storage });

router.post("/", upload.single("image"), businessController.createBusiness);
router.get("/", businessController.getBusinesses);
router.put("/:id", upload.single("image"), businessController.updateBusiness);
router.delete("/:id", businessController.deleteBusiness);

module.exports = router;
