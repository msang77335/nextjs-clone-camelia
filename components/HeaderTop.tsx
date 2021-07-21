import React from "react";
import Link from "next/link";
import * as s from "../styles/emotion/StyleHeader";
import SearchBox from "./SearchBox";
import CartIcon from "./CartIcon";

interface Props {
   openSearch?: Function;
   openCategory?: Function;
}

const HeaderTop: React.FC<Props> = ({ openSearch, openCategory }) => {
   return (
      <s.Top>
         <s.HeaderContainer>
            <s.Left>
               <Link href="/">
                  <a>
                     <s.Link>
                        <span> Camelia Brand</span>
                        <s.RegisteredIcon />
                     </s.Link>
                  </a>
               </Link>
               <s.Btn onClick={() => openCategory()}>
                  <s.BarsIcon />
               </s.Btn>
               <s.Btn onClick={() => openSearch()}>
                  <s.SearchIcon />
               </s.Btn>
            </s.Left>
            <Link href="/">
               <a>
                  <s.Logo
                     src="//theme.hstatic.net/1000365849/1000614631/14/logo.png?v=78"
                     alt=""
                  />
               </a>
            </Link>
            <s.Right>
               <Link href="/">
                  <a>
                     <s.PhoneLink>
                        <s.PhoneIcon />
                     </s.PhoneLink>
                  </a>
               </Link>
               <Link href="/">
                  <a>
                     <s.Link>
                        <s.PhoneIcon />
                        <p> 0123456789</p>
                     </s.Link>
                  </a>
               </Link>
               <Link href="/">
                  <a>
                     <s.EmailLink>
                        <s.EnvelopeIcon />
                        <p> thecameliavn@gmail.com</p>
                     </s.EmailLink>
                  </a>
               </Link>
               <s.SearchBox>
                  <SearchBox />
               </s.SearchBox>
               <CartIcon />
            </s.Right>
         </s.HeaderContainer>
      </s.Top>
   );
};

export default HeaderTop;
