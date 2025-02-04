const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  content: { type: String, required: true },
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  imageUrl: { type: String },
});

const postModel = mongoose.model("Post", PostSchema);
module.exports = postModel;
