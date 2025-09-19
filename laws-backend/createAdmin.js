const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const adminSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const Admin = mongoose.model("Admin", adminSchema);

async function createAdmin() {
  const hashedPassword = bcrypt.hashSync("Admin@123", 10); 
  const admin = new Admin({
    name: "Super Admin",
    email: "admin@example.com",
    password: hashedPassword,
  });

  await admin.save();
  console.log("✅ Admin created successfully!");
  mongoose.connection.close();
}

createAdmin();
