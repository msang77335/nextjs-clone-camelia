import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as s from "../styles/emotion/StyleCartModalItem";
import { Product } from "../interface/CartInterface";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

interface PropsProduct {
   product?: Product;
}

const CartModalItem: React.FC<PropsProduct> = ({ product }) => {
   const dispatch = useDispatch();
   const { removeFromCart, closeCartModal } = bindActionCreators(
      actionCreators,
      dispatch
   );
   return (
      <s.Item>
         <s.Left>
            <s.ImageBox>
               <Link href={`/products/${product.productInfo.slug}`}>
                  <a>
                     <Image
                        onClick={() => closeCartModal()}
                        src={product.productInfo.image}
                        width={100}
                        height={100}
                        alt="Product name"
                     />
                  </a>
               </Link>
            </s.ImageBox>
            <s.InfoList>
               <s.InfoItem>
                  <Link href={`/products/${product.productInfo.slug}`}>
                     <a>
                        <s.Name onClick={() => closeCartModal()}>
                           {product.productInfo.name}
                        </s.Name>
                     </a>
                  </Link>
               </s.InfoItem>
               <s.InfoItem>
                  <s.Quantity>Số lượng: {product.quantity}</s.Quantity>
               </s.InfoItem>
               <s.InfoItem>
                  <s.Price>
                     {product.productInfo.price
                        .toString()
                        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                     <s.PriceUnit>đ</s.PriceUnit>
                  </s.Price>
               </s.InfoItem>
            </s.InfoList>
         </s.Left>
         <s.Right>
            <s.BtnDel onClick={() => removeFromCart(product)}>Xóa</s.BtnDel>
         </s.Right>
      </s.Item>
   );
};

export default CartModalItem;
