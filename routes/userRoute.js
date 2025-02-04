const Router = require("express");
const userRouter = Router();
const {
  createUserOrAdmin,
  loginUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("../controllers/userCtrl");

userRouter.post("/createUser", createUserOrAdmin);
userRouter.post("/loginUser", loginUser);
userRouter.get("/getUsers", getUsers);
userRouter.put("/updateUser", updateUser);
userRouter.delete("/deleteUser", deleteUser);

module.exports = userRouter;
