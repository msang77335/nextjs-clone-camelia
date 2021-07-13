import { ProductSumary } from "../../../interface";
import ProductDetailSchema from "../../../models/DetailOfProduct";
import productApi from "./productApi";
export default async function handler(req, res) {
   const keyWord = req.query.key;
   const productsSumary = [] as ProductSumary[];
   const products = await ProductDetailSchema.find({
      name: { $regex: keyWord },
   });
   await Promise.all(
      products.map(async (product) => {
         return productApi
            .getSummary(product.productSlug)
            .then((productSumary: ProductSumary) => {
               productsSumary.push(productSumary);
            });
      })
   )
      .then(() => {
         res.status(200).json({ products: productsSumary });
      })
      .catch(() => {
         res.status(400).json({ products: [] });
      });
}
