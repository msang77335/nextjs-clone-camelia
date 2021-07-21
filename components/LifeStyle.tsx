import React from "react";
import * as s from "../styles/emotion/SlyleLifeStyle";

const LifeStyle: React.FC = () => {
   return (
      <s.LifeStyleContainer>
         <s.Title as="h2">Lối sống Minimalism</s.Title>
         <s.Des>
            Cùng với thiết kế đơn giản và chất liệu bềnh bỉ, sản phẩm từ Camelia
            Brand đem đến cho người dùng nhiều tiện ích để khiến cuộc sống của
            bạn trở nên dễ dàng, tối ưu và gọn gàng hơn.
         </s.Des>
         <s.Video>
            <s.Iframe
               width="790"
               height="455"
               src="https://www.youtube.com/embed/GTw4fNvorZs?rel=0&autoplay=0"
               title="YouTube video player"
               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
               allowFullScreen
            />
         </s.Video>
      </s.LifeStyleContainer>
   );
};

export default LifeStyle;
