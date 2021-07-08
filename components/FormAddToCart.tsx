import React from "react";
import * as s from "../styles/emotion/StyleFromAddToCart";
import Counter from "./Counter";
import { ProductDetail } from "../interface/index";
import useCouter from "../hooks/UseCouter";

interface ColorData {
   slug?: string;
   value?: string;
}

interface ProductData {
   slug?: string;
   name?: string;
   price?: number;
   image?: string;
   quantity?: string;
}

interface CartData {
   color?: ColorData;
   product?: ProductData;
}

interface PropsCart {
   productDetail?: ProductDetail;
   indexColor?: number;
   handleChangeColor?: Function;
}

const FormAddToCart: React.FC<PropsCart> = ({
   productDetail,
   indexColor,
   handleChangeColor,
}) => {
   const [quantity, onChange, minusClick, plusClick] = useCouter();
   const handleAddToCart = () => {
      const cartData = {
         product: {
            name: productDetail.name,
            slug: productDetail.slug,
            price: productDetail.price,
            image: productDetail.colors[indexColor].images[0],
            quantity: quantity,
         },
         color: {
            slug: productDetail.colors[indexColor].slug,
            value: productDetail.colors[indexColor].value,
         },
      } as CartData;
      console.log(cartData);
   };
   return (
      <div>
         <s.Color>
            <s.ColorTitle>Màu sắc</s.ColorTitle>
            <s.ColorList>
               {productDetail.colors.map((color, i) => (
                  <s.ColorItem key={i}>
                     <s.BtnColor
                        isActive={indexColor === i ? true : false}
                        onClick={() => handleChangeColor(i)}
                        value={color.value}
                     />
                  </s.ColorItem>
               ))}
            </s.ColorList>
         </s.Color>
         <Counter
            quantity={quantity}
            onChange={onChange}
            minusClick={minusClick}
            plusClick={plusClick}
         />
         <s.Actions>
            <s.BtnAddToCart onClick={() => handleAddToCart()}>
               thêm vào giỏ
            </s.BtnAddToCart>
            <s.BtnBuy>mua ngay</s.BtnBuy>
         </s.Actions>
      </div>
   );
};

export default FormAddToCart;
