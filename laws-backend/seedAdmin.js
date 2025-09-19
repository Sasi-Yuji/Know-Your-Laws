const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
require("dotenv").config();
const Admin = require("./models/Admin");
const connectDB = require("./config/db");

async function seedAdmin() {
  await connectDB();

  const email = "admin6337@gmail.com";   
  const plainPassword = "Admin@123";     
  const passwordHash = await bcrypt.hash(plainPassword, 10);

  await Admin.deleteMany({});

  const admin = new Admin({
    email,
    passwordHash,
  });

  await admin.save();
  console.log("✅ Admin account created:");
  console.log("   Email:", email);
  console.log("   Password:", plainPassword);

  mongoose.disconnect();
}

seedAdmin();
