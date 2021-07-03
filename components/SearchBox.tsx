import React from "react";
import cartIcon from "../assets/images/icons8-search.svg";
import * as s from "../styles/emotion/StyleSearchBox";

const SearchBox: React.FC = () => {
   return (
      <s.Box>
         <s.Input type="text" placeholder="Nhập tên sản phẩm..." />
         <s.Submit>
            <img src={cartIcon}></img>
         </s.Submit>
      </s.Box>
   );
};

export default SearchBox;
