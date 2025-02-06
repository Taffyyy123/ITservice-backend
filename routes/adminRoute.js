const Router = require("express");
const adminRouter = Router();
const {
  createAdmin,
  getAdmin,
  loginAdmin,
} = require("../controllers/adminCtrl");

adminRouter.post("/createAdmin", createAdmin);
adminRouter.post("/loginAdmin", loginAdmin);
adminRouter.get("/getAdmin", getAdmin);

module.exports = adminRouter;
