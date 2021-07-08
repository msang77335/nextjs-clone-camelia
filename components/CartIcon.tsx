import React from "react";
import Image from "next/image";
import cartIcon from "../assets/images/shopping-cart.svg";
import * as s from "../styles/emotion/StyleHeader";
import { useSelector } from "react-redux";
import { State } from "../state/reducers";

interface PropsCart {
   openCart?: Function;
}

const CartIcon: React.FC<PropsCart> = ({ openCart }) => {
   const amountProduct = useSelector((state: State) => state.cart.amount);
   return (
      <s.Cart onClick={() => openCart()}>
         <Image src={cartIcon} width={32} height={32} alt="Cart" />
         <s.Quantity>
            <s.QuantityValue>{amountProduct}</s.QuantityValue>
         </s.Quantity>
      </s.Cart>
   );
};

export default CartIcon;
