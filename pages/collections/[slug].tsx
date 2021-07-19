import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";
import * as s from "../../styles/emotion/StyleCollectionPage";
import categoryApi from "../api/category/categoryApi";
import { Category, ProductsByCategory } from "../../interface/index";
import { motion } from "framer-motion";
const Collections = dynamic(() => import("../../components/Collections"));

interface PropsCollections {
   productsByCategory: ProductsByCategory;
}

export const getStaticProps: GetStaticProps<PropsCollections> = async (
   content
) => {
   const categorySlug: string = content.params.slug.toString();
   const productsByCategory: ProductsByCategory =
      await categoryApi.getProductsByCategory(categorySlug);
   return {
      props: {
         productsByCategory: JSON.parse(JSON.stringify(productsByCategory)),
      },
   };
};

export const getStaticPaths: GetStaticPaths = async () => {
   const categories: Category[] = await categoryApi.getAll();
   const paths = categories.map((category) => ({
      params: { slug: `${category.slug}` },
   }));
   return {
      paths,
      fallback: false,
   };
};

const CollectionsPage: React.FC<PropsCollections> = ({
   productsByCategory,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
   const TitleHead = productsByCategory.category.name.toUpperCase();
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <Head>
            <title>{TitleHead} - Camelia Brand</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <s.CollectionContentMain>
            <s.Content>
               <Collections
                  // key={productsByCategory.category.slug}
                  page={true}
                  info={productsByCategory}
               />
            </s.Content>
         </s.CollectionContentMain>
      </motion.div>
   );
};

export default CollectionsPage;
