const adminModel = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createAdmin = async (req, res) => {
  try {
    const body = req.body;
    const { username, password } = body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = {
      username,
      password: hashedPassword,
    };
    const response = await adminModel.create(newAdmin);
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};
const loginAdmin = async (req, res) => {
  try {
    const body = req.body;
    const { username, password } = body;
    const admin = await adminModel.findOne({ username });
    if (!admin) {
      return res.status(404).send("Username not found");
    }
    const passwordValid = await bcrypt.compare(password, admin.password);
    if (!passwordValid) {
      return res.status(404).send("Incorrect password");
    }
    const token = jwt.sign(
      {
        adminId: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "3h",
      }
    );
    res.send({ token });
  } catch (error) {
    res.status(404).send("Log in error");
  }
};
module.exports = { createAdmin, loginAdmin };
