const categoryModel = require("../models/categoryModel");

const createCategory = async (req, res) => {
  try {
    const body = req.body;
    const category = await categoryModel.create(body);
    res.send(category);
  } catch (error) {
    console.log(error);
  }
};
const getCategories = async (req, res) => {
  try {
    const response = await categoryModel.find().populate();
    res.send(response);
  } catch (error) {
    console.log(error);
  }
};
const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params;
    const deletedCategory = await categoryModel.findByIdAndDelete(categoryId);
    if (!deleteCategory) {
      return res.send({ message: "Category not found" });
    }
    res.send("Category deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { createCategory, getCategories, deleteCategory };
