import React from "react";
import cartIcon from "../assets/images/shopping-cart.svg";
import * as s from "../styles/emotion/StyleHeader";

interface Props {
   openCart?: Function;
}

const CartIcon: React.FC<Props> = ({ openCart }) => {
   return (
      <s.Cart onClick={() => openCart()}>
         <img src={cartIcon} alt="" />
         <s.Quantity>
            <s.QuantityValue>3</s.QuantityValue>
         </s.Quantity>
      </s.Cart>
   );
};

export default CartIcon;
