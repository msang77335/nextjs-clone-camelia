import React from "react";
import Link from "next/link";
import * as s from "../styles/emotion/StyleHeader";
import SearchBox from "./SearchBox";

const Header: React.FC = () => {
   return (
      <s.Bottom>
         <s.HeaderContainer>
            <Link href="/">
               <a>
                  <s.EmailLink>
                     <s.EnvelopeIcon />
                     <p> thecameliavn@gmail.com</p>
                  </s.EmailLink>
               </a>
            </Link>
            <SearchBox />
         </s.HeaderContainer>
      </s.Bottom>
   );
};

export default Header;
