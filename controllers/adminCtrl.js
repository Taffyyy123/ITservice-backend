const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const adminModel = require("../models/adminModel");

const createAdmin = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = {
      username,
      email,
      password: hashedPassword,
    };
    const response = await adminModel.create(newAdmin);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error creating admin" });
  }
};
const loginAdmin = async (req, res) => {
  try {
    const body = req.body;
    const { username, password } = body;
    const admin = await adminModel.findOne({ username });
    if (!admin) {
      return res.status(404).json("Username not found");
    }
    const passwordValid = await bcrypt.compare(password, admin.password);
    if (!passwordValid) {
      return res
        .status(404)
        .json("Incorrect username and password combination");
    }
    const token = jwt.sign(
      {
        adminId: admin._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    res.send({ token });
  } catch (error) {
    console.log(error);
  }
};
const getAdmin = async (req, res) => {
  try {
    const admin = await adminModel.find();
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { createAdmin, getAdmin, loginAdmin };
