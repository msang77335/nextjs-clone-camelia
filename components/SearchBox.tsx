import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import searchIcon from "../assets/images/icons8-search.svg";
import * as s from "../styles/emotion/StyleSearchBox";
import SearchBoxResultItem from "./SearchBoxResultItem";
import useInput from "../hooks/UseInput";

const SearchBox: React.FC = () => {
   const [value, onChange, error, setError, resetValue] = useInput("");
   const [resultList, setResultList] = useState([]);
   const [focused, setFocused] = React.useState(false);
   const router = useRouter();
   const onFocus = () => setFocused(true);
   const onBlur = () => setFocused(false);
   const handleClickResutlItem = () => {
      resetValue();
   };
   useEffect(() => {
      async function fetchProducts(keyWork: string) {
         const response = await fetch(
            `http://localhost:3000/api/product/${keyWork}`
         );
         const responseJSON = await response.json();
         const { products } = responseJSON;
         setResultList(products);
      }
      if (value) {
         fetchProducts(value);
      } else {
         setResultList([]);
      }
   }, [value]);
   const handleSubmit = (e) => {
      resetValue();
      e.preventDefault();
      const href = `/search?products=${value}`;
      router.push(href);
   };
   return (
      <s.Box>
         <s.SearchForm onSubmit={handleSubmit}>
            <s.Input
               type="text"
               placeholder="Nhập tên sản phẩm..."
               value={value}
               onChange={onChange}
               onFocus={onFocus}
               onBlur={onBlur}
            />
            <Link href={`/search?products=${value}`} passHref={true}>
               <s.Submit onClick={() => resetValue()}>
                  <Image src={searchIcon} width={20} height={20} alt="Search" />
               </s.Submit>
            </Link>
         </s.SearchForm>
         <AnimatePresence exitBeforeEnter>
            {value && focused && (
               <motion.div
                  key="result"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
               >
                  <s.Result>
                     {resultList.length > 0 ? (
                        <s.ResultList>
                           {resultList.map((result, i) => {
                              if (i < 4) {
                                 return (
                                    <SearchBoxResultItem
                                       key={i}
                                       product={result}
                                       onClick={handleClickResutlItem}
                                    />
                                 );
                              }
                           })}
                           {resultList.length > 4 && (
                              <s.SeeMore>
                                 <Link href={`/search?products=${value}`}>
                                    <a onClick={() => resetValue()}>
                                       Xem Thêm {resultList.length - 4} sản phẩm
                                    </a>
                                 </Link>
                              </s.SeeMore>
                           )}
                        </s.ResultList>
                     ) : (
                        <s.Text>Không có sản phẩm phù hợp...</s.Text>
                     )}
                  </s.Result>
               </motion.div>
            )}
         </AnimatePresence>
      </s.Box>
   );
};

export default SearchBox;
