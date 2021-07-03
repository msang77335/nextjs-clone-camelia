import React from "react";
import Image from "next/image";
import cartIcon from "../assets/images/shopping-cart.svg";
import * as s from "../styles/emotion/StyleHeader";

interface PropsCart {
   openCart?: Function;
}

const CartIcon: React.FC<PropsCart> = ({ openCart }) => {
   return (
      <s.Cart onClick={() => openCart()}>
         <Image src={cartIcon} width={32} height={32} alt="Cart" />
         <s.Quantity>
            <s.QuantityValue>3</s.QuantityValue>
         </s.Quantity>
      </s.Cart>
   );
};

export default CartIcon;
