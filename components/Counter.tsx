import React from "react";
import * as s from "../styles/emotion/StyleCouter";

interface CounterProps {
   quantity?: string;
   onChange?: Function;
   minusClick?: Function;
   plusClick?: Function;
}

const Counter: React.FC<CounterProps> = ({
   quantity,
   onChange,
   minusClick,
   plusClick,
}) => {
   return (
      <s.Count>
         <s.CountTitle>Số lượng</s.CountTitle>
         <s.CountBox>
            <s.CountMinus
               disabled={quantity === "1" ? true : false}
               onClick={() => minusClick()}
            />
            <s.CountInput value={quantity} onChange={() => onChange()} />
            <s.CountPlus
               disabled={quantity === "9999999" ? true : false}
               onClick={() => plusClick()}
            />
         </s.CountBox>
      </s.Count>
   );
};

export default Counter;
