const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    infoTitle: { type: String },
    infoContent: { type: String },
    createdAt: { type: Date, default: Date.now },
    imageUrl: { type: String },
  },
  { timestamps: true }
);

const postModel = mongoose.model("Post", PostSchema);
module.exports = postModel;
