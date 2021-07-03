import React from "react";
import * as s from "../styles/emotion/StyleSideBarMenu";
import MenuSideBarItem from "./MenuSideBarItem";

interface Props {
   closeCategory?: Function;
}

const MenuSideBar: React.FC<Props> = ({ closeCategory }) => {
   const handleItemClick = () => {
      closeCategory();
   };

   return (
      <s.List>
         <s.Item onClick={handleItemClick}>
            <MenuSideBarItem href="/about-us">about us</MenuSideBarItem>
         </s.Item>
         <s.Item onClick={handleItemClick}>
            <MenuSideBarItem href="/address">address</MenuSideBarItem>
         </s.Item>
         <s.Item onClick={handleItemClick}>
            <MenuSideBarItem href="/blog">blog</MenuSideBarItem>
         </s.Item>
         <s.Item onClick={handleItemClick}>
            <MenuSideBarItem href="/membership">membership</MenuSideBarItem>
         </s.Item>
      </s.List>
   );
};
export default MenuSideBar;
