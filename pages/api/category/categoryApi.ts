import {
   Category,
   Product,
   ProductsByCategory,
   ProductSumary,
   ProductsMayLike,
} from "../../../interface";
import CategorySchema from "../../../models/Category";
import ProductSchema from "../../../models/Product";
import dbConnect from "../../../utils/dbConnect";
import productApi from "../product/productApi";

dbConnect();

const categoryApi = {
   getAll: async () => {
      return await CategorySchema.find({});
   },
   getProductsByCategory: async (slug: string) => {
      return new Promise(async (resolve, reject) => {
         const category: Category = await CategorySchema.findOne({
            slug: slug,
         });
         const products: Product[] = await ProductSchema.find({
            categorySlug: category.slug,
         });
         const productsSumary = [] as ProductSumary[];
         await Promise.all(
            products.map(async (product) => {
               return productApi
                  .getSummary(product.slug)
                  .then((productSumary: ProductSumary) => {
                     productsSumary.push(productSumary);
                  });
            })
         )
            .then(() => {
               resolve({
                  category: category,
                  products: productsSumary,
               } as ProductsByCategory);
            })
            .catch(() => reject({}));
      });
   },
   getProductsAllCategory: async () => {
      return new Promise(async (resolve, reject) => {
         const productsAllCategory = [] as ProductsByCategory[];
         const categories: Category[] = await CategorySchema.find({});
         Promise.all(
            categories.map(async (category) => {
               return categoryApi
                  .getProductsByCategory(category.slug)
                  .then((productsByCategory: ProductsByCategory) => {
                     if (productsByCategory.products.length != 0) {
                        productsAllCategory.push(productsByCategory);
                     }
                  });
            })
         )
            .then(() => {
               resolve(productsAllCategory);
            })
            .catch(() => reject({}));
      });
   },
};
export default categoryApi;
