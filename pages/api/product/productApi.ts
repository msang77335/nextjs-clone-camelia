import dbConnect from "../../../utils/dbConnect";
import ColorSchema from "../../../models/Color";
import ProductSchema from "../../../models/Product";
import DetailOfProductSchema from "../../../models/DetailOfProduct";
import ColorOfProductSchema from "../../../models/ColorOfProduct";
import {
   Product,
   ColorOfProduct,
   Color,
   ColorDetail,
   ColorSumary,
   ProductSumary,
   ProductDetail,
   DetailOfProduct,
} from "../../../interface/index";

dbConnect();

const productApi = {
   get: async (slug: string) => {
      return await ProductSchema.findOne({ slug: slug });
   },
   getAll: async () => {
      return await ProductSchema.find({});
   },
   getCount: async () => {
      return await ProductSchema.find({}).countDocuments();
   },
   getDetail: async (slug: string) => {
      return new Promise(async (resolve, reject) => {
         const productDetail = {} as ProductDetail;
         const detail: DetailOfProduct = await DetailOfProductSchema.findOne({
            productSlug: slug,
         });
         if (detail != null) {
            productDetail.slug = slug;
            productDetail.name = detail.name;
            productDetail.price = detail.price;
            productDetail.info = detail.info;
            productDetail.infoList = [...detail.infoList];
            productDetail.video = detail.video;
            productDetail.description = [...detail.description];
            productDetail.colors = [];
            const colorsOfProduct: ColorOfProduct[] =
               await ColorOfProductSchema.find({
                  productSlug: slug,
               });
            Promise.all(
               colorsOfProduct.map(async (colorOfProduct) => {
                  return await ColorSchema.findOne({
                     slug: colorOfProduct.colorSlug,
                  }).then((color: Color) => {
                     productDetail.colors.push({
                        slug: color.slug,
                        name: color.name,
                        value: color.value,
                        images: colorOfProduct.images,
                     } as ColorDetail);
                  });
               })
            ).then(() => {
               resolve(productDetail);
            });
         } else {
            reject({});
         }
      });
   },
   getSummary: async (slug: string) => {
      return new Promise(async (resolve, reject) => {
         const productSumary = {} as ProductSumary;
         const detail: DetailOfProduct = await DetailOfProductSchema.findOne({
            productSlug: slug,
         });
         if (detail != null) {
            productSumary.slug = slug;
            productSumary.name = detail.name;
            productSumary.price = detail.price;
            productSumary.colors = [];
            const colorsOfProduct: ColorOfProduct[] =
               await ColorOfProductSchema.find({ productSlug: slug });
            Promise.all(
               colorsOfProduct.map(async (colorOfProduct) => {
                  return await ColorSchema.findOne({
                     slug: colorOfProduct.colorSlug,
                  }).then((color: Color) => {
                     productSumary.colors.push({
                        name: color.name,
                        value: color.value,
                        image: colorOfProduct.images[0],
                     } as ColorSumary);
                  });
               })
            ).then(() => {
               resolve(productSumary);
            });
         } else {
            reject({});
         }
      });
   },
   getByKeyWord: async (keyWord: string) => {
      return new Promise(async (resolve, reject) => {
         const productsSumary = [] as ProductSumary[];
         const products = await DetailOfProductSchema.find({
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
               resolve({ keyWord: keyWord, products: productsSumary });
            })
            .catch(() => {
               reject([]);
            });
      });
   },
   getInPage: async (page: number) => {
      return new Promise(async (resolve, reject) => {
         const productsSumary = [] as ProductSumary[];
         const products = await ProductSchema.find({})
            .limit(12)
            .skip((page - 1) * 12);
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
                  category: { name: "tất cả sản phẩm", value: "all" },
                  products: productsSumary,
               });
            })
            .catch(() => {
               reject([]);
            });
      });
   },
   getProductsMayLike: async (slug: string) => {
      return new Promise(async (resolve, reject) => {
         const product: Product = await ProductSchema.findOne({ slug: slug });
         const products: Product[] = await ProductSchema.find({
            $and: [
               { categorySlug: product.categorySlug },
               { slug: { $nin: product.slug } },
            ],
         }).limit(5);
         const productsSumary = [] as ProductSumary[];
         await Promise.all(
            products.map(async (product) => {
               return productApi
                  .getSummary(product.slug)
                  .then((productSumary) => {
                     productsSumary.push(productSumary);
                  });
            })
         )
            .then(() => {
               resolve(productsSumary);
            })
            .catch(() => reject({}));
      });
   },
};
export default productApi;
