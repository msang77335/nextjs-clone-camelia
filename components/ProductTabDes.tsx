import React from "react";
import Image from "next/image";
import * as s from "../styles/emotion/StyleProductTabs";
import { DescOfProduct } from "../interface/index";

interface PropsDescription {
   descOfProductList?: DescOfProduct[];
}

const ProductTabDes: React.FC<PropsDescription> = ({ descOfProductList }) => {
   return (
      <div>
         {descOfProductList.map((descOfProduct, i) => {
            if (descOfProduct.desType === "text") {
               return (
                  <s.TextContent key={i}>{descOfProduct.value}</s.TextContent>
               );
            } else {
               return (
                  <s.ImageContent>
                     <Image
                        key={i}
                        src={descOfProduct.value}
                        width={descOfProduct.width}
                        height={descOfProduct.height}
                        placeholder="blur"
                        blurDataURL={descOfProduct.value}
                        alt="Description"
                     />
                  </s.ImageContent>
               );
            }
         })}
      </div>
   );
};

export default ProductTabDes;
