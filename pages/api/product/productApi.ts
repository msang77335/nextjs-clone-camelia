import dbConnect from "../../../utils/dbConnect";
import ColorSchema from "../../../models/Color";
import ProductSchema from "../../../models/Product";
import DetailOfProductSchema from "../../../models/DetailOfProduct";
import ColorOfProductSchema from "../../../models/ColorOfProduct";
import {
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
};
export default productApi;
