import React from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";
import { AnimatePresence } from "framer-motion";
import { ProductDetail, ProductSumary, Product } from "../../interface";
import productApi from "../api/product/productApi";
import categoryApi from "../api/category/categoryApi";
const ProductDetailPage = dynamic(
   () => import("../../components/ProductDetailPage")
);

interface PropsProductDetail {
   productDetail?: ProductDetail;
   productsMayLike?: ProductSumary[];
}

export const getStaticProps: GetStaticProps<PropsProductDetail> = async (
   content
) => {
   const productSlug: string = content.params.slug.toString();
   const productDetail: ProductDetail = await productApi.getDetail(productSlug);
   const productsMayLike = await categoryApi.getProductsMayLike(
      productDetail.slug
   );
   return {
      props: {
         productDetail: JSON.parse(JSON.stringify(productDetail)),
         productsMayLike: JSON.parse(JSON.stringify(productsMayLike)),
      },
   };
};

export const getStaticPaths: GetStaticPaths = async () => {
   const products: Product[] = await productApi.getAll();
   const paths = products.map((product) => ({
      params: { slug: `${product.slug}` },
   }));
   return {
      paths,
      fallback: false,
   };
};

const ProductsPage: React.FC<PropsProductDetail> = ({
   productDetail,
   productsMayLike,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
   const TitleHead = productDetail.name.toUpperCase();
   return (
      <div>
         <Head>
            <title>{TitleHead} - Camelia Brand</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <AnimatePresence exitBeforeEnter>
            <ProductDetailPage
               key={productDetail.slug}
               productDetail={productDetail}
               productsMayLike={productsMayLike}
            />
         </AnimatePresence>
      </div>
   );
};

export default ProductsPage;
