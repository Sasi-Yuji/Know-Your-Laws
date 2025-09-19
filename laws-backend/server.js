const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const businessRoutes = require("./routes/businessRoutes");
const rightsRoutes = require("./routes/rightsRoutes");
const tipsRoutes = require("./routes/tipsRoutes");

const Business = require("./models/Business");
const Right = require("./models/Right");
const LegalTip = require("./models/LegalTip");

app.use("/api/businesses", businessRoutes);
app.use("/api/rights", rightsRoutes);
app.use("/api/tips", tipsRoutes);

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
const Admin = mongoose.model("Admin", adminSchema);

app.post("/api/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Request body:", req.body);

    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password required" });
    }

    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(401).json({ msg: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ msg: "Incorrect password" });
    }

    if (!process.env.JWT_SECRET) {
      return res.status(500).json({ msg: "JWT_SECRET not set" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      msg: "Login successful",
      token,
      admin: { id: admin._id, name: admin.name, email: admin.email },
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

app.get("/api/dashboard-stats", async (req, res) => {
  try {
    const businessCount = await Business.countDocuments();
    const rightsCount = await Right.countDocuments();
    const tipsCount = await LegalTip.countDocuments();

    res.json({
      businessCount,
      rightsCount,
      tipsCount,
    });
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    res.status(500).json({ msg: "Server error" });
  }
});

app.get("/", (req, res) => res.send("✅ API running"));

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
