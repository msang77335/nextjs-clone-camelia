const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema(
   {
      name: String,
      slug: String,
   },
   { collection: "category" }
);

const Category =
   mongoose.models.Category || mongoose.model("Category", CategorySchema);

module.exports = Category;
