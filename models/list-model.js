const mongoose = require("mongoose");

const listSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    genre: { type: String },
    type: { type: String },
    content: { type: Array },
  },
  { timestamps: true }
);

module.exports = mongoose.model("List", listSchema);
