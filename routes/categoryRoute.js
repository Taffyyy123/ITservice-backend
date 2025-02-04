const Router = require("express");
const categoryRouter = Router();
const {
  createCategory,
  getCategories,
  deleteCategory,
} = require("../controllers/categoryCtrl");

categoryRouter.post("/createCategory", createCategory);
categoryRouter.get("/getCategories", getCategories);
categoryRouter.delete("/deleteCategory", deleteCategory);

module.exports = categoryRouter;
