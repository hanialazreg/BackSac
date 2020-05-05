const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  principalFiles: { type: String, required: true },
  otherFile: [{ type: String, required: false }],
  liked: { type: Number, default: 0 },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  infoCategory: { type: Schema.Types.ObjectId, ref: "InfoCategory" },
});
module.exports = mongoose.model("Product", productSchema);
