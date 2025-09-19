require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("../models/Admin");

async function createAdmin() {
  await mongoose.connect(process.env.MONGO_URI);

  const username = "admin";
  const password = "StrongPassword123"; 

  const existing = await Admin.findOne({ username });
  if (existing) {
    console.log("Admin already exists");
    return process.exit();
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await Admin.create({ username, passwordHash });
  console.log("✅ Admin created:", username);

  process.exit();
}

createAdmin();
