const mongoose = require("mongoose");
const { Schema } = mongoose;

const CategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});
const categoryModel = mongoose.model("Category", CategorySchema);
module.exports = categoryModel;
