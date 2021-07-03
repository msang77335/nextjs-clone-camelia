import React from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import * as s from "../styles/emotion/StyleBanner";

const Banner: React.FC = () => {
   return (
      <s.Wrapper>
         <Menu />
         <Categories />
      </s.Wrapper>
   );
};

export default Banner;
