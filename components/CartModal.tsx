import React from "react";
import Link from "next/link";
import * as s from "../styles/emotion/StyleCartModal";
import CartModalItem from "./CartModalItem";
import { useSelector } from "react-redux";
import { State } from "../state/reducers";

interface PropsModal {
   closeCart?: Function;
   status?: boolean;
}

const CartModal: React.FC<PropsModal> = ({ status, closeCart }) => {
   const products = useSelector((state: State) => state.cart.products);
   return (
      <s.Modal isOpen={status}>
         <s.Content>
            <s.Top>
               <s.Title>giỏ hàng</s.Title>
               <s.ReplyIcon onClick={() => closeCart()} />
            </s.Top>
            {products.length > 0 ? (
               <div>
                  <s.Center>
                     {products.map((product) => (
                        <CartModalItem
                           key={product.productInfo.slug}
                           product={product}
                           closeCart={closeCart}
                        />
                     ))}
                  </s.Center>
                  <s.Bottom>
                     <s.Total>
                        <s.Price>
                           Tổng: <s.PriceValue>450,000</s.PriceValue>
                        </s.Price>
                     </s.Total>
                     <s.Actions>
                        <s.BtnEdit>điều chỉnh</s.BtnEdit>
                        <s.BtnPay>thanh toán</s.BtnPay>
                     </s.Actions>
                  </s.Bottom>
               </div>
            ) : (
               <s.CenterEmpty>
                  <s.Text>Giỏ hàng trống</s.Text>
                  <s.Text>
                     Tiếp tục mua hàng
                     <Link href="/collections/all">
                        <a>
                           <s.Link onClick={() => closeCart()}> tại đây</s.Link>
                        </a>
                     </Link>
                     .
                  </s.Text>
               </s.CenterEmpty>
            )}
         </s.Content>
         <s.Backgroud onClick={() => closeCart()}></s.Backgroud>
      </s.Modal>
   );
};

export default CartModal;
