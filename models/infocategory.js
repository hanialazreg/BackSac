const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const infoCategory = new Schema({
  bodyColor: { type: String },
  antiSlip: { type: Boolean },
  wall: { type: Boolean },
  floor: { type: Boolean },
  in: { type: Boolean },
  out: { type: Boolean },
  chemical: { type: Boolean },
  storing: { type: String },
});

module.exports = mongoose.model("InfoCategory", "categorySchema");
