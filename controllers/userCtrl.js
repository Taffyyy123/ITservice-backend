const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUserOrAdmin = async (req, res) => {
  try {
    const { username, password, role, email } = req.body;

    const validRoles = ["admin", "user"];
    if (!validRoles.includes(role)) {
      return res.status(400).send({ message: "Invalid role" });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).send({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      email,
      password: hashedPassword,
      role,
    };

    const response = await User.create(newUser);
    res
      .status(201)
      .send({ message: `${role} created successfully`, user: response });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error creating user/admin" });
  }
};
const loginUser = async (req, res) => {
  try {
    const body = req.body;
    const { username, password } = body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json("Username not found");
    }
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res
        .status(404)
        .json("Incorrect username and password combination");
    }
    const token = jwt.sign(
      {
        userId: user._id,
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
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Хэрэглэгчийн мэдээлэл авахад алдаа гарлаа." });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params;
  const { username, email, role } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      userId,
      { username, email, role },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "Хэрэглэгч олдсонгүй." });
    }

    res.status(200).send(user);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Хэрэглэгчийн мэдээлэл засахад алдаа гарлаа.", error });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params;

  try {
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({ message: "Хэрэглэгч олдсонгүй." });
    }

    res.status(200).json({ message: "Хэрэглэгч амжилттай устгагдлаа." });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Хэрэглэгчийг устгахад алдаа гарлаа.", error });
  }
};

module.exports = {
  createUserOrAdmin,
  loginUser,
  getUsers,
  updateUser,
  deleteUser,
};
