const mongoose = require("mongoose");
const { Schema } = mongoose;
const postSchema = new Schema({
  title: { type: String, required: true },
  postImg: { type: String, required: true },
  time: { type: Date, default: Date.now },
  caption: { type: String, required: true },
});
const postModel = mongoose.model("posts", postSchema);
module.exports = postModel;
