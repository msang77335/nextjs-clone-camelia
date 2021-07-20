import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import useInput from "../hooks/UseInput";
import * as s from "../styles/emotion/StyleSideBarSearch";
import SideBarSearchResultItem from "./SideBarSearchResultItem";

interface Props {
   closeSearch?: Function;
   status?: Boolean;
}

const SideBarSearch: React.FC<Props> = ({ closeSearch, status }) => {
   const [value, onChange, error, setError, resetValue] = useInput("");
   const [resultList, setResultList] = useState([]);
   const router = useRouter();
   const handleClickResutlItem = () => {
      resetValue();
      closeSearch();
   };
   useEffect(() => {
      async function fetchProducts(keyWork: string) {
         const response = await fetch(`/api/product/${keyWork}`);
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
      closeSearch();
   };
   const handleClickSearch = () => {
      resetValue();
      closeSearch();
   };
   return (
      <s.SideBar isOpen={status}>
         <s.Content>
            <s.Top>
               <s.Label as="h4">tiềm kiếm</s.Label>
               <s.BtnClose onClick={() => closeSearch()} />
            </s.Top>
            <s.SearchBox>
               <s.SearchForm onSubmit={handleSubmit}>
                  <s.Input
                     type="text"
                     placeholder="Tìm kiếm sản phẩm..."
                     value={value}
                     onChange={onChange}
                  />
                  <Link href={`/search?products=${value}`} passHref={true}>
                     <s.Submit onClick={handleClickSearch}>
                        <s.SearchIcon />
                     </s.Submit>
                  </Link>
               </s.SearchForm>
               <AnimatePresence exitBeforeEnter>
                  {value && (
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
                                          <SideBarSearchResultItem
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
                                          <a onClick={handleClickSearch}>
                                             Xem Thêm {resultList.length - 4}{" "}
                                             sản phẩm
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
            </s.SearchBox>
         </s.Content>
         <s.BackGroud onClick={() => closeSearch()} />
      </s.SideBar>
   );
};

export default SideBarSearch;
