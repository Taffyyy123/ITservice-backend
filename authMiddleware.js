const User = require("../models/User");

const isAdmin = async (req, res, next) => {
  const userId = req.user._id;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "Хэрэглэгч олдсонгүй" });
    }

    if (user.role !== "admin") {
      return res.status(403).json({ message: "Админ эрх байхгүй" });
    }

    next();
  } catch (error) {
    res.status(500).json({ message: "Алдаа гарлаа!" });
  }
};

module.exports = isAdmin;
