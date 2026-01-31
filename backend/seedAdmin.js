const mongoose = require("mongoose");
const userModel = require("./models/userModel");
const bcrypt = require("bcrypt");
const createAdmin = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin_juna:10101997@cluster0.a6a577v.mongodb.net/travelagencyDB?retryWrites=true&w=majority",
    );
    const adminEmail = "admin@gmail.com";
    const checkAdmin = await userModel.findOne({ email: adminEmail });
    if (checkAdmin) {
      console.log("Admin already exists");
      mongoose.disconnect();
    }
    const addAdmin = new userModel({
      username: "admin",
      email: adminEmail,
      role: "admin",
      password: bcrypt.hashSync("admin123", 10),
    });
    await addAdmin.save();
    console.log("Admin added");
    mongoose.disconnect();
  } catch (err) {
    console.log("Admin not created" + err);
    process.exit();
  }
};
createAdmin();