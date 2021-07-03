const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColorOfProductSchema = new Schema(
   {
      productSlug: String,
      colorSlug: String,
      images: Array,
   },
   { collection: "color_of_product" }
);

const ColorOfProduct =
   mongoose.models.ColorOfProduct ||
   mongoose.model("ColorOfProduct", ColorOfProductSchema);

module.exports = ColorOfProduct;
