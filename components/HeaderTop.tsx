import React from "react";
import Link from "next/link";
import * as s from "../styles/emotion/StyleHeader";
import cartIcon from "../assets/images/shopping-cart.svg";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBox from "./SearchBox";
import CartIcon from "./CartIcon";

interface Props {
   openSearch?: Function;
   openCategory?: Function;
   openCart?: Function;
}

const HeaderTop: React.FC<Props> = ({ openSearch, openCategory, openCart }) => {
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
                  <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
               </s.Btn>
               <s.Btn onClick={() => openSearch()}>
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
               </s.Btn>
            </s.Left>
            <s.Logo
               src="//theme.hstatic.net/1000365849/1000614631/14/logo.png?v=78"
               alt=""
            />
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
               <CartIcon openCart={openCart} />
            </s.Right>
         </s.HeaderContainer>
      </s.Top>
   );
};

export default HeaderTop;