const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
   {
      categorySlug: String,
      slug: String,
   },
   { collection: "product" }
);

const Product =
   mongoose.models.Product || mongoose.model("Product", ProductSchema);

module.exports = Product;
