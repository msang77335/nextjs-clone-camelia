import React from "react";
import { ProductSumary } from "../interface/index";
import * as s from "../styles/emotion/StyleProductList";
import ProductItem from "./ProductItem";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
   products: ProductSumary[];
   categorySlug: string;
}

const ProductList: React.FC<Props> = ({ categorySlug, products }) => {
   return (
      <AnimatePresence exitBeforeEnter>
         <motion.div
            key={categorySlug}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
         >
            <s.List>
               {products.map((product) => (
                  <s.Item key={product.slug}>
                     <ProductItem product={product} />
                  </s.Item>
               ))}
            </s.List>
         </motion.div>
      </AnimatePresence>
   );
};

export default ProductList;
