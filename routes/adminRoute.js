const Router = require("express");
const adminRouter = Router();
const { createAdmin, loginAdmin } = require("../controllers/adminCtrl");

adminRouter.post("/createAdmin", createAdmin);
adminRouter.post("/loginAdmin", loginAdmin);

module.exports = adminRouter;
