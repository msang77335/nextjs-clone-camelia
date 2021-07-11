import React from "react";
import Image from "next/image";
import cartIcon from "../assets/images/shopping-cart.svg";
import * as s from "../styles/emotion/StyleHeader";
import { State } from "../state/reducers";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

const CartIcon: React.FC = () => {
   const amountProduct = useSelector((state: State) => state.cart.amount);
   const dispatch = useDispatch();
   const { openCartModal } = bindActionCreators(actionCreators, dispatch);
   return (
      <s.Cart onClick={() => openCartModal()}>
         <Image src={cartIcon} width={32} height={32} alt="Cart" />
         <s.Quantity>
            <s.QuantityValue>{amountProduct}</s.QuantityValue>
         </s.Quantity>
      </s.Cart>
   );
};

export default CartIcon;
