import React, { useState, useEffect } from "react";
import * as s from "../styles/emotion/StyleCollections";
import Link from "next/link";
import { ProductsByCategory, ProductSumary } from "../interface/index";
import SelectOptions from "./SelectOptions";
import ProductList from "./ProductList";

interface Props {
   info?: ProductsByCategory;
   page?: Boolean;
}

interface Option {
   key: number;
   value: string;
}

const Collections: React.FC<Props> = ({ info, page }) => {
   const [products, setProducts] = useState<ProductSumary[]>(info.products);
   useEffect(() => {
      setProducts(info.products);
   }, [info]);

   const options: Option[] = [
      { key: 0, value: "Tất cả sản phẩm" },
      { key: 1, value: "Giá thấp đến cao" },
      { key: 2, value: "Giá cao đến thấp" },
   ];
   const handleOptionChange = (key: number) => {
      if (key === 0) {
         setProducts(info.products);
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
   return (
      <s.CollectionsContainer>
         {page ? (
            <s.Top>
               <s.Name as="h2">{info.category.name}</s.Name>
               <SelectOptions
                  options={options}
                  handleOptionChange={handleOptionChange}
               />
            </s.Top>
         ) : (
            <s.Top>
               <Link
                  href={`/collections/[slug]`}
                  as={`/collections/${info.category.slug}`}
               >
                  <a>
                     <s.Title as="h3">{info.category.name}</s.Title>
                  </a>
               </Link>
               <s.Line />
            </s.Top>
         )}
         <ProductList products={products} categorySlug={info.category.slug} />
      </s.CollectionsContainer>
   );
};

export default Collections;
