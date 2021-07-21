import React, { useState } from "react";
import { ProductDetail, ProductSumary } from "../interface";
import { AnimatePresence, motion } from "framer-motion";
import * as s from "../styles/emotion/StyleProductsDetail";
import ProductSlider from "./ProductSlider";
import ProductTabs from "./ProductTabs";
import YouMayLike from "./YouMayLike";
import LightBox from "./LightBox";
import FormAddToCart from "./FormAddToCart";

interface PropsProductDetail {
   productDetail?: ProductDetail;
   productsMayLike?: ProductSumary[];
}

const ProductDetailPage: React.FC<PropsProductDetail> = ({
   productDetail,
   productsMayLike,
}) => {
   const [indexColor, setIndexColor] = useState<number>(0);
   const [isLightBox, setIsLightBox] = useState<boolean>(false);
   const [indexLightBox, setIndexLightBox] = useState<number>(0);
   const handleChangeSlide = (i: number) => {
      setIndexLightBox(i);
   };
   const handleToggleLightBox = () => {
      setIsLightBox(!isLightBox);
   };
   const handleChangeColor = (i: number) => {
      setIndexLightBox(0);
      setIndexColor(i);
   };
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <s.ProductsPageContentMain>
            <s.ProductsPageContainer>
               <s.Left>
                  <AnimatePresence exitBeforeEnter>
                     <ProductSlider
                        toggleLightBox={handleToggleLightBox}
                        key={indexColor}
                        images={productDetail.colors[indexColor].images}
                        color={productDetail.colors[indexColor].value}
                        changeSlide={handleChangeSlide}
                     />
                  </AnimatePresence>
                  <s.Tabs>
                     <ProductTabs
                        video={productDetail.video}
                        descOfProductList={productDetail.description}
                     />
                  </s.Tabs>
               </s.Left>
               <s.Right>
                  <s.RightBox>
                     <s.Name as="h2">{productDetail.name}</s.Name>
                     <s.Price>
                        {productDetail.price
                           .toString()
                           .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        <s.PriceUnit>đ</s.PriceUnit>
                     </s.Price>
                     <s.Info>{productDetail.info}</s.Info>
                     <s.InfoList>
                        {productDetail.infoList.map((info, i) => (
                           <s.InfoItem key={i}>{info}</s.InfoItem>
                        ))}
                     </s.InfoList>
                     <FormAddToCart
                        productDetail={productDetail}
                        indexColor={indexColor}
                        handleChangeColor={handleChangeColor}
                     />
                     <s.Tabs>
                        <ProductTabs
                           video={productDetail.video}
                           descOfProductList={productDetail.description}
                        />
                     </s.Tabs>
                  </s.RightBox>
               </s.Right>
            </s.ProductsPageContainer>
            {productsMayLike.length > 0 && (
               <YouMayLike products={productsMayLike} />
            )}
         </s.ProductsPageContentMain>
         <LightBox
            key={indexColor}
            status={isLightBox}
            closeLightBox={() => setIsLightBox(false)}
            images={productDetail.colors[indexColor].images}
            index={indexLightBox}
         />
      </motion.div>
   );
};

export default ProductDetailPage;
