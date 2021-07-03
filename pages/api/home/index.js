import dbConnect from "../../../utils/dbConnect";
import Category from "../../../models/Category";
import Product from "../../../models/Product";
import categoryApi from "../category/categoryApi";

dbConnect();

export async function getDataCollections() {
   return new Promise(async (resolve, reject) => {
      const data = [];
      const categories = await Category.find({});
      Promise.all(
         categories.map(async (category) => {
            return categoryApi
               .getAllProductByCategory(category.slug)
               .then((allProduct) => {
                  if (allProduct.products.length != 0) {
                     data.push(allProduct);
                  }
               });
         })
      ).then(() => {
         resolve(data);
      });
   });
}
