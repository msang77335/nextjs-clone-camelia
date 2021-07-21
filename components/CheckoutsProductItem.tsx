import Image from "next/image";
import React from "react";
import { Product } from "../interface/CartInterface";
import * as s from "../styles/emotion/StyleCheckouts";

interface PropsCheckoutsProductItem {
   product?: Product;
}

const CheckoutsProductItem: React.FC<PropsCheckoutsProductItem> = ({
   product,
}) => {
   return (
      <s.ProductItem>
         <s.ProductItemLeft>
            <s.Image>
               <s.ImageBox>
                  <Image
                     src={product.productInfo.image}
                     width={60}
                     height={60}
                     alt={product.productInfo.slug}
                     placeholder="blur"
                     blurDataURL={product.productInfo.image}
                  />
               </s.ImageBox>
               <s.Amount>
                  <p>{product.quantity}</p>
               </s.Amount>
            </s.Image>
            <s.Info>
               <s.Name>{product.productInfo.name}</s.Name>
               <s.Color>{product.colorInfo.name}</s.Color>
            </s.Info>
         </s.ProductItemLeft>
         <s.Price>
            {product.totalPrice
               .toString()
               .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            đ
         </s.Price>
      </s.ProductItem>
   );
};

export default CheckoutsProductItem;
