import Link from "next/link";
import React from "react";
import * as s from "../styles/emotion/StyleMenu";
import MenuItem from "./MenuItem";

const Menu: React.FC = () => {
   return (
      <s.MenuWrapper>
         <s.MenuContainer>
            <s.List>
               <s.Item>
                  <MenuItem href="/about-us">about us</MenuItem>
               </s.Item>
               <s.Item>
                  <MenuItem href="/address">address</MenuItem>
               </s.Item>
               <s.Item>
                  <Link href="/">
                     <a>
                        <s.Logo
                           src="https://theme.hstatic.net/1000365849/1000614631/14/logo.png?v=78"
                           alt=""
                        />
                     </a>
                  </Link>
               </s.Item>
               <s.Item>
                  <MenuItem href="/blog">blog</MenuItem>
               </s.Item>
               <s.Item>
                  <MenuItem href="/membership">membership</MenuItem>
               </s.Item>
            </s.List>
         </s.MenuContainer>
      </s.MenuWrapper>
   );
};
export default Menu;
