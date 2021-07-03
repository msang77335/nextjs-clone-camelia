import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import * as s from "../styles/emotion/StyleHome";
import ImageSlider from "../components/ImageSlider";
import Collections from "../components/Collections";
import LifeStyle from "../components/LifeStyle";
import Instagram from "../components/Instagram";
import categoryApi from "./api/category/categoryApi";
import { ProductsByCategory } from "../interface/index";
import { motion } from "framer-motion";

interface PropsHome {
   productsAllCategory: ProductsByCategory[];
}

export const getStaticProps: GetStaticProps<PropsHome> = async () => {
   const productsAllCategory: ProductsByCategory =
      await categoryApi.getProductsAllCategory();
   return {
      props: {
         productsAllCategory: JSON.parse(JSON.stringify(productsAllCategory)),
      },
   };
};

const Home: React.FC<PropsHome> = ({
   productsAllCategory,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <Head>
            <title>Camelia Brand - More than Simplicity</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <ImageSlider />
         <s.HomeContentMain>
            <LifeStyle />
            {productsAllCategory.map((productsByCategory) => (
               <Collections
                  key={productsByCategory.category.slug}
                  info={productsByCategory}
               />
            ))}
            <Instagram />
         </s.HomeContentMain>
      </motion.div>
   );
};

export default Home;
