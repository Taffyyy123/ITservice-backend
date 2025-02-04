const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    phone: { type: String, required: true },
    gmail: { type: String, required: true },
    location: { type: String, required: true },
    request: { type: String },
  },
  { timestamps: true }
);

const contactModel = mongoose.model("contact", contactSchema);
module.exports = contactModel;
