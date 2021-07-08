import React, { useState } from "react";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";
import { AnimatePresence, motion } from "framer-motion";
import * as s from "../../styles/emotion/StyleProductsPage";
import ProductSlider from "../../components/ProductSlider";
import ProductTabs from "../../components/ProductTabs";
import Counter from "../../components/Counter";
import { ProductDetail, ProductSumary, Product } from "../../interface";
import productApi from "../api/product/productApi";
import categoryApi from "../api/category/categoryApi";
import YouMayLike from "../../components/YouMayLike";
import LightBox from "../../components/LightBox";
import FormAddToCart from "../../components/FormAddToCart";

interface PropsProductDetail {
   productDetail?: ProductDetail;
   productsMayLike?: ProductSumary[];
}

export const getStaticProps: GetStaticProps<PropsProductDetail> = async (
   content
) => {
   const productSlug: string = content.params.slug.toString();
   const productDetail: ProductDetail = await productApi.getDetail(productSlug);
   const productsMayLike = await categoryApi.getProductsMayLike(
      productDetail.slug
   );
   return {
      props: {
         productDetail: JSON.parse(JSON.stringify(productDetail)),
         productsMayLike: JSON.parse(JSON.stringify(productsMayLike)),
      },
   };
};

export const getStaticPaths: GetStaticPaths = async () => {
   const products: Product[] = await productApi.getAll();
   const paths = products.map((product) => ({
      params: { slug: `${product.slug}` },
   }));
   return {
      paths,
      fallback: false,
   };
};

const ProductsPage: React.FC<PropsProductDetail> = ({
   productDetail,
   productsMayLike,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
   const TitleHead = productDetail.name.toUpperCase();
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
         <Head>
            <title>{TitleHead} - Camelia Brand</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
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
                  <ProductTabs
                     video={productDetail.video}
                     descOfProductList={productDetail.description}
                  />
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

export default ProductsPage;
