import Link from "next/link";
import React from "react";
import * as s from "../styles/emotion/StyleCategories";

const Categories: React.FC = () => {
   return (
      <s.CategoriesWrapper>
         <s.CategoriesContainer>
            <s.List>
               <s.Item>
                  <Link href="/collections/backpacks">
                     <a>
                        <s.ImageBox>
                           <s.ImageNotHover
                              src="//theme.hstatic.net/1000365849/1000614631/14/baloden.svg?v=78"
                              alt=""
                           />
                           <s.ImageHover
                              src="https://theme.hstatic.net/1000365849/1000614631/14/balodo.svg?v=78"
                              alt=""
                           />
                        </s.ImageBox>
                        <s.Name>Backpacks</s.Name>
                     </a>
                  </Link>
               </s.Item>
               <s.Item>
                  <Link href="/collections/wallets">
                     <a>
                        <s.ImageBox>
                           <s.ImageNotHover
                              src="//theme.hstatic.net/1000365849/1000614631/14/viden.svg?v=78"
                              alt=""
                           />
                           <s.ImageHover
                              src="//theme.hstatic.net/1000365849/1000614631/14/vido.svg?v=78"
                              alt=""
                           />
                        </s.ImageBox>
                        <s.Name>Wallets</s.Name>
                     </a>
                  </Link>
               </s.Item>
               <s.Item>
                  <Link href="/collections/accessories">
                     <a>
                        <s.ImageBox>
                           <s.ImageNotHover
                              src="//theme.hstatic.net/1000365849/1000614631/14/viden.svg?v=78"
                              alt=""
                           />
                           <s.ImageHover
                              src="//theme.hstatic.net/1000365849/1000614631/14/vido.svg?v=78"
                              alt=""
                           />
                        </s.ImageBox>
                        <s.Name>Tote & Accessories</s.Name>
                     </a>
                  </Link>
               </s.Item>
               <s.Item>
                  <Link href="/123">
                     <a>
                        <s.ImageBox>
                           <s.ImageNotHover
                              src="//theme.hstatic.net/1000365849/1000614631/14/tuicheoden.svg?v=78"
                              alt=""
                           />
                           <s.ImageHover
                              src="//theme.hstatic.net/1000365849/1000614631/14/tuicheodo.svg?v=78"
                              alt=""
                           />
                        </s.ImageBox>
                        <s.Name>Crossbody bags</s.Name>
                     </a>
                  </Link>
               </s.Item>
            </s.List>
         </s.CategoriesContainer>
      </s.CategoriesWrapper>
   );
};

export default Categories;
