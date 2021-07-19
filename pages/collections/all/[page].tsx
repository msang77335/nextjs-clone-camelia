import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import * as s from "../../../styles/emotion/StyleCollectionPage";
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";
import { ProductsByCategory } from "../../../interface/index";
import productApi from "../../api/product/productApi";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const Collections = dynamic(() => import("../../../components/Collections"));
const Pagination = dynamic(() => import("../../../components/Pagination"));

interface PropsCollections {
   productsByCategory: ProductsByCategory;
   start: number;
   end: number;
   current: number;
}

export const getStaticProps: GetStaticProps<PropsCollections> = async ({
   params,
}) => {
   const page = parseInt(params.page.toString());
   const productsByCategory: ProductsByCategory = await productApi.getInPage(
      page
   );
   return {
      props: {
         productsByCategory: JSON.parse(JSON.stringify(productsByCategory)),
         start: 1,
         end: 2,
         current: page,
      },
   };
};

export const getStaticPaths: GetStaticPaths = async () => {
   const productCount = await productApi.getCount();
   const countPage = Math.ceil(productCount / 12);
   const pages = [];
   for (var i = 1; i <= countPage; i++) {
      pages.push(i);
   }
   const paths = pages.map((page) => ({
      params: { page: `${page}` },
   }));
   return {
      paths,
      fallback: false,
   };
};

const AllProductPage: React.FC<PropsCollections> = ({
   productsByCategory,
   start,
   end,
   current,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
   const router = useRouter();
   const handleChangePage = (i) => {
      const href = `/collections/all/${i}`;
      router.push(href);
   };
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
               <Collections
                  key={current}
                  page={true}
                  info={productsByCategory}
               />
            </s.Content>
            <Pagination
               start={start}
               current={current}
               end={end}
               handlePageChange={handleChangePage}
            />
         </s.CollectionContentMain>
      </motion.div>
   );
};

export default AllProductPage;
