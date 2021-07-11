import React from "react";
import cartEmtpyIcon from "../../assets/images/empty-cart.svg";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import * as s from "../../styles/emotion/StyleCartPage";
import { State } from "../../state/reducers";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import { Product } from "../../interface/CartInterface";
const CartItem = dynamic(() => import("../../components/CartItem"));

const Cart: React.FC = () => {
   var products = useSelector((state: State) => state.cart.products);
   const totalPrice = useSelector((state: State) => state.cart.totalPrice);
   const dispatch = useDispatch();
   const { updateCart } = bindActionCreators(actionCreators, dispatch);
   const handleProductChange = (productChange: Product) => {
      products = products.map((product) =>
         product.productInfo.slug === productChange.productInfo.slug &&
         product.colorInfo.slug === productChange.colorInfo.slug
            ? {
                 ...product,
                 quantity: productChange.quantity,
                 totalPrice:
                    productChange.productInfo.price * productChange.quantity,
              }
            : product
      );
   };
   return (
      <s.CartContainer>
         {products.length > 0 ? (
            <div>
               <s.Table>
                  <s.Thead>
                     <s.Tr>
                        <s.Th>Sản phẩm</s.Th>
                        <s.Th>Giá tiền</s.Th>
                        <s.Th>Số lượng</s.Th>
                        <s.Th>Tổng giá</s.Th>
                        <s.Th>Xóa</s.Th>
                     </s.Tr>
                  </s.Thead>
                  <tbody>
                     {products.map((product, i) => (
                        <CartItem
                           key={i}
                           product={product}
                           handleChange={handleProductChange}
                        />
                     ))}
                  </tbody>
               </s.Table>
               <s.Bottom>
                  <s.TotalPrice>
                     Tổng tiền:{" "}
                     <s.Price>
                        {totalPrice
                           .toString()
                           .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                        <s.PriceUnit>đ</s.PriceUnit>
                     </s.Price>
                  </s.TotalPrice>
                  <s.Actions>
                     <s.BtnApply onClick={() => updateCart(products)}>
                        cập nhật
                     </s.BtnApply>
                     <s.BtnPay>
                        <Link href="">
                           <a>thanh toán</a>
                        </Link>
                     </s.BtnPay>
                  </s.Actions>
               </s.Bottom>
            </div>
         ) : (
            <s.CartEmtpy>
               <div>
                  <s.Text>
                     <Image
                        src={cartEmtpyIcon}
                        width={50}
                        height={50}
                        alt="Empty Cart"
                     />
                     <span> Giỏ hàng trống !!!</span>
                  </s.Text>
                  <s.Text>
                     Tiếp tục mua hàng
                     <Link href="/collections/all">
                        <a> tại đây</a>
                     </Link>
                     .
                  </s.Text>
               </div>
            </s.CartEmtpy>
         )}
      </s.CartContainer>
   );
};

export default Cart;
