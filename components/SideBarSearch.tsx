import Link from "next/link";
import React from "react";
import * as s from "../styles/emotion/StyleSideBarSearch";

interface Props {
   closeSearch?: Function;
   status?: Boolean;
}

const SideBarSearch: React.FC<Props> = ({ closeSearch, status }) => {
   return (
      <s.SideBar isOpen={status}>
         <s.Content>
            <s.Top>
               <s.Label as="h4">tiềm kiếm</s.Label>
               <s.BtnClose onClick={() => closeSearch()} />
            </s.Top>
            <s.SearchBox>
               <s.Input type="text" placeholder="Tìm kiếm sản phẩm..." />
               <s.Submit>
                  <s.SearchIcon />
               </s.Submit>
            </s.SearchBox>
         </s.Content>
         <s.BackGroud onClick={() => closeSearch()} />
      </s.SideBar>
   );
};

export default SideBarSearch;
