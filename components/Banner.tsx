import React from "react";
import dynamic from "next/dynamic";
import Menu from "./Menu";
import * as s from "../styles/emotion/StyleBanner";
const Categories = dynamic(() => import("./Categories"));

const Banner: React.FC = () => {
   return (
      <s.Wrapper>
         <Menu />
         <Categories />
      </s.Wrapper>
   );
};

export default Banner;
