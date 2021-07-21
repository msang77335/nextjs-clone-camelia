import React, { useState, useEffect } from "react";
import emtpyIcon from "../../assets/images/box.svg";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { motion, AnimatePresence } from "framer-motion";
import useInput from "../../hooks/UseInput";
import * as s from "../../styles/emotion/StyleSearchPage";
const ProductItem = dynamic(() => import("../../components/ProductItem"));
const SelectOptions = dynamic(() => import("../../components/SelectOptions"));
import productApi from "../api/product/productApi";
import { ProductsByKeyWord, ProductSumary } from "../../interface/index";

interface PropsSearchPage {
   productsByKeyWord: ProductsByKeyWord;
}

interface Option {
   key: number;
   value: string;
}

export const getServerSideProps: GetServerSideProps<PropsSearchPage> = async (
   content
) => {
   const productQuery: string = content.query.products.toString();
   let productsByKeyWord: ProductsByKeyWord;
   if (productQuery) {
      productsByKeyWord = await productApi.getByKeyWord(productQuery);
   } else {
      productsByKeyWord = { keyWord: "", products: [] };
   }
   return {
      props: {
         productsByKeyWord: JSON.parse(JSON.stringify(productsByKeyWord)),
      },
   };
};

const Search: React.FC<PropsSearchPage> = ({
   productsByKeyWord,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
   const router = useRouter();
   const [value, onChange, error, setError, resetValue] = useInput("");
   const [products, setProducts] = useState<ProductSumary[]>(
      productsByKeyWord.products
   );

   useEffect(() => {
      setProducts(productsByKeyWord.products);
   });

   const options: Option[] = [
      { key: 0, value: "Tất cả sản phẩm" },
      { key: 1, value: "Giá thấp đến cao" },
      { key: 2, value: "Giá cao đến thấp" },
   ];

   const handleOptionChange = (key: number) => {
      if (key === 0) {
         setProducts(productsByKeyWord.products);
      } else if (key === 1) {
         const newProducts: ProductSumary[] = [...products];
         setProducts(
            newProducts.sort((a, b) => {
               return a.price - b.price;
            })
         );
      } else if (key === 2) {
         const newProducts = [...products];
         setProducts(
            newProducts.sort((a, b) => {
               return b.price - a.price;
            })
         );
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const href = `/search?products=${value}`;
      router.push(href);
      resetValue();
   };
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <Head>
            <title>Kết quả tìm kiếm - Camelia Brand</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width, maximum-scale=1"
            />
         </Head>
         <s.SearchPageContentMain>
            <s.SearchPageContainer>
               <s.Top>
                  <s.Title>Kết quả tìm kiếm</s.Title>
                  <s.SearchWord>
                     Nhóm sản phẩm:{" "}
                     <s.KeyWord>{productsByKeyWord.keyWord}</s.KeyWord> / Từ
                     khóa: <s.KeyWord>{productsByKeyWord.keyWord}</s.KeyWord>
                  </s.SearchWord>
               </s.Top>
               <s.SearchBox onSubmit={handleSubmit}>
                  <SelectOptions
                     options={options}
                     handleOptionChange={handleOptionChange}
                  />
                  <s.FormGroup>
                     <s.Input
                        placeholder="Nhập tên sản phẩm..."
                        name="product"
                        value={value}
                        onChange={onChange}
                        autoComplete="off"
                     />
                     <s.Submit type="submit">
                        <Link href={`/search?products=${value}`}>
                           <a>
                              <s.SearchIcon />
                           </a>
                        </Link>
                     </s.Submit>
                  </s.FormGroup>
               </s.SearchBox>
               <AnimatePresence exitBeforeEnter>
                  {products.length > 0 ? (
                     <motion.div
                        key={productsByKeyWord.keyWord}
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
                  ) : (
                     <motion.div
                        key="emtpy"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45 }}
                     >
                        <s.Emtpy>
                           <Image
                              src={emtpyIcon}
                              width={50}
                              height={50}
                              alt="emtpy"
                           />
                           <s.Text>
                              Không tìm thấy sản phẩm nào phù hợp...
                           </s.Text>
                        </s.Emtpy>
                     </motion.div>
                  )}
               </AnimatePresence>
            </s.SearchPageContainer>
         </s.SearchPageContentMain>
      </motion.div>
   );
};

export default Search;
