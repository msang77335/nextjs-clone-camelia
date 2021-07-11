import React, { useEffect } from "react";
import * as s from "../styles/emotion/StyleCartPage";
import Image from "next/image";
import Link from "next/link";
import useCouter from "../hooks/UseCouter";
import Counter from "./Counter";
import { Product } from "../interface/CartInterface";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

interface PropsCartItem {
   product?: Product;
   handleChange?: Function;
}

const CartItem: React.FC<PropsCartItem> = ({ product, handleChange }) => {
   const dispatch = useDispatch();
   const { removeFromCart } = bindActionCreators(actionCreators, dispatch);
   const [quantity, onChange, minusClick, plusClick] = useCouter(
      product.quantity
   );
   useEffect(() => {
      const producUpdate = { ...product, quantity: quantity };
      handleChange(producUpdate);
   });
   return (
      <s.Tr>
         <s.Td data-label="Sản phẩm">
            <s.Product>
               <s.ProductImage>
                  <Link href="">
                     <a>
                        <Image
                           src={product.productInfo.image}
                           width={90}
                           height={90}
                           alt={product.productInfo.name}
                        />
                     </a>
                  </Link>
               </s.ProductImage>
               <s.ProductInfo>
                  <s.ProductName>
                     <Link href="">
                        <a>{product.productInfo.name}</a>
                     </Link>
                  </s.ProductName>
                  <s.ProductColor>
                     Phiên bản: <span>{product.colorInfo.name}</span>
                  </s.ProductColor>
               </s.ProductInfo>
            </s.Product>
         </s.Td>
         <s.Td data-label="Giá tiền">
            <s.ProductPrice>
               {product.productInfo.price
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
               <s.PriceUnit>đ</s.PriceUnit>
            </s.ProductPrice>
         </s.Td>
         <s.Td data-label="Số lượng">
            <s.ProductQuantity>
               <Counter
                  quantity={quantity}
                  onChange={onChange}
                  minusClick={minusClick}
                  plusClick={plusClick}
                  isTitle={false}
               />
            </s.ProductQuantity>
         </s.Td>
         <s.Td data-label="Tổng giá">
            <s.ProductTotalPrice>
               {product.totalPrice
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
               <s.PriceUnit>đ</s.PriceUnit>
            </s.ProductTotalPrice>
         </s.Td>
         <s.Td data-label="Xoá">
            <s.TrashIcon onClick={() => removeFromCart(product)} />
         </s.Td>
      </s.Tr>
   );
};

export default CartItem;
