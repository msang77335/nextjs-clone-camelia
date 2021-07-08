const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DetailOfProductSchema = new Schema(
   {
      productSlug: String,
      name: String,
      price: Number,
      info: String,
      infoList: [String],
      video: String,
      description: [
         { desType: String, value: String, width: Number, height: Number },
      ],
   },
   { collection: "detail_of_product" }
);

const DetailOfProduct =
   mongoose.models.DetailOfProduct ||
   mongoose.model("DetailOfProduct", DetailOfProductSchema);

module.exports = DetailOfProduct;
