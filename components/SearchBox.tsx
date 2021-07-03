import React from "react";
import Image from "next/image";
import searchIcon from "../assets/images/icons8-search.svg";
import * as s from "../styles/emotion/StyleSearchBox";

const SearchBox: React.FC = () => {
   return (
      <s.Box>
         <s.Input type="text" placeholder="Nhập tên sản phẩm..." />
         <s.Submit>
            <Image src={searchIcon} width={20} height={20} alt="Search" />
         </s.Submit>
      </s.Box>
   );
};

export default SearchBox;
