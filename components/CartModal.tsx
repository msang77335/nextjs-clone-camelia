import React from "react";
import Link from "next/link";
import * as s from "../styles/emotion/StyleCartModal";
import CartModalItem from "./CartModalItem";
import { State } from "../state/reducers";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const CartModal: React.FC = () => {
   const status = useSelector((state: State) => state.cartModal.status);
   const products = useSelector((state: State) => state.cart.products);
   const totalPrice = useSelector((state: State) => state.cart.totalPrice);
   const dispatch = useDispatch();
   const { closeCartModal } = bindActionCreators(actionCreators, dispatch);
   return (
      <s.Modal isOpen={status}>
         <AnimatePresence exitBeforeEnter>
            {status && (
               <motion.div
                  key={totalPrice}
                  initial={{
                     opacity: 0,
                     y: -200,
                     position: "fixed",
                     zIndex: 200,
                     right: 15,
                     top: 50,
                  }}
                  animate={{
                     opacity: 1,
                     y: 0,
                     position: "fixed",
                     zIndex: 200,
                     top: 50,
                  }}
                  exit={{ opacity: 0, y: -200 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
               >
                  <s.Content>
                     <s.Top>
                        <s.Title>giỏ hàng</s.Title>
                        <s.ReplyIcon onClick={() => closeCartModal()} />
                     </s.Top>
                     {products.length > 0 ? (
                        <div>
                           <s.Center>
                              {products.map((product) => (
                                 <CartModalItem
                                    key={product.productInfo.slug}
                                    product={product}
                                 />
                              ))}
                           </s.Center>
                           <s.Bottom>
                              <s.Total>
                                 <s.Price>
                                    <s.PriceTitle>Tổng: </s.PriceTitle>
                                    <s.PriceValue>
                                       {totalPrice
                                          .toString()
                                          .replace(
                                             /(\d)(?=(\d{3})+(?!\d))/g,
                                             "$1,"
                                          )}
                                       <s.PriceUnit>đ</s.PriceUnit>
                                    </s.PriceValue>
                                 </s.Price>
                              </s.Total>
                              <s.Actions>
                                 <s.BtnEdit onClick={() => closeCartModal()}>
                                    <Link href="/cart">
                                       <a>điều chỉnh</a>
                                    </Link>
                                 </s.BtnEdit>
                                 <s.BtnPay onClick={() => closeCartModal()}>
                                    <Link href="/cart">
                                       <a>thanh toán</a>
                                    </Link>
                                 </s.BtnPay>
                              </s.Actions>
                           </s.Bottom>
                        </div>
                     ) : (
                        <s.CenterEmpty>
                           <s.Text>Giỏ hàng trống !!!</s.Text>
                           <s.Text>
                              Tiếp tục mua hàng
                              <Link href="/collections/all">
                                 <a onClick={() => closeCartModal()}>
                                    {" "}
                                    tại đây
                                 </a>
                              </Link>
                              .
                           </s.Text>
                        </s.CenterEmpty>
                     )}
                  </s.Content>
               </motion.div>
            )}
         </AnimatePresence>
         <s.Backgroud onClick={() => closeCartModal()}></s.Backgroud>
      </s.Modal>
   );
};

export default CartModal;
