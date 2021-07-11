import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import * as s from "../../styles/emotion/StyleCollectionPage";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ProductsByCategory } from "../../interface/index";
import categoryApi from "../api/category/categoryApi";
import { motion } from "framer-motion";
const Collections = dynamic(() => import("../../components/Collections"));

interface PropsCollections {
   productsByCategory: ProductsByCategory;
}

export const getStaticProps: GetStaticProps<PropsCollections> = async () => {
   const productsByCategory: ProductsByCategory =
      await categoryApi.getProducts();
   return {
      props: {
         productsByCategory: JSON.parse(JSON.stringify(productsByCategory)),
      },
   };
};

const AllProductPage: React.FC<PropsCollections> = ({
   productsByCategory,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <Head>
            <title>Tất cả sản phẩm - Camelia Brand</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <s.CollectionContentMain>
            <s.Content>
               <Collections page={true} info={productsByCategory} />
            </s.Content>
         </s.CollectionContentMain>
      </motion.div>
   );
};

export default AllProductPage;
