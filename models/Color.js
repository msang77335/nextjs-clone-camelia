const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColorSchema = new Schema(
   {
      name: String,
      slug: String,
      value: String,
   },
   { collection: "color" }
);

const Color = mongoose.models.Color || mongoose.model("Color", ColorSchema);

module.exports = Color;
