const mongoose = require("mongoose");
const { Schema } = mongoose;

const serviceSchema = new Schema(
  {
    infoImg: { type: String, required: true },
    subTitle: { type: String, required: true },
    caption: { type: String, required: true },
    price: { type: String, required: true },
  },
  { timestamps: true }
);
const serviceModel = mongoose.model("service", serviceSchema);
module.exports = serviceModel;
