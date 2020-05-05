const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: { type: String, required: true },
  infoCategory: { type: Schema.Types.ObjectId, ref: "InfoCategory" },
});

module.exports = mongoose.model("Category", "categorySchema");
