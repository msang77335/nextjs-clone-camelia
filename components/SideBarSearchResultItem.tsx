import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as s from "../styles/emotion/StyleSideBarSearch";
import { ProductSumary } from "../interface";

interface PropsResult {
   product?: ProductSumary;
   onClick?: Function;
}

const SideBarSearchResultItem: React.FC<PropsResult> = ({
   product,
   onClick,
}) => {
   return (
      <Link href={`/products/${product.slug}`}>
         <a>
            <s.ResultItem onClick={() => onClick()}>
               <s.Image>
                  <Image
                     src={product.colors[0].image}
                     width={50}
                     height={50}
                     alt={product.name}
                     placeholder="blur"
                     blurDataURL={product.colors[0].image}
                  />
               </s.Image>
               <s.Info>
                  <s.Name>{product.name}</s.Name>
                  <s.Price>
                     {product.price
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                     <s.PriceUnit>đ</s.PriceUnit>
                  </s.Price>
               </s.Info>
            </s.ResultItem>
         </a>
      </Link>
   );
};

export default SideBarSearchResultItem;
