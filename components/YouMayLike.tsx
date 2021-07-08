import React from "react";
import * as s from "../styles/emotion/StyleYouMayLike";
import { ProductSumary } from "../interface/index";
import ProductItem from "./ProductItem";

interface Props {
   products?: ProductSumary[];
}

const YouMayLike: React.FC<Props> = ({ products }) => {
   return (
      <s.YouMayLikeContainer>
         <s.Top>
            <s.Title>có thể bạn thích</s.Title>
         </s.Top>
         <s.List>
            {products.map((product) => (
               <s.Item key={product.slug}>
                  <ProductItem product={product} />
               </s.Item>
            ))}
         </s.List>
      </s.YouMayLikeContainer>
   );
};

export default YouMayLike;
