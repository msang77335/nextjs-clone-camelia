import Link from "next/link";
import React from "react";
import * as s from "../styles/emotion/StyleSideBarCategories";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuSideBar from "./MenuSideBar";

interface Props {
   closeCategory?: Function;
   status?: Boolean;
}

const SideBarCategory: React.FC<Props> = ({ closeCategory, status }) => {
   return (
      <s.SideBar isOpen={status}>
         <s.Content>
            <s.Top>
               <s.Logo>
                  <Link href="/">
                     <a onClick={() => closeCategory()}>
                        <s.Link>
                           <span>Camelia Brand</span>
                           <s.RegisteredIcon />
                        </s.Link>
                     </a>
                  </Link>
               </s.Logo>
               <s.Categories>
                  <s.Category onClick={() => closeCategory()}>
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
                  </s.Category>
                  <s.Category>
                     <Link href="/123">
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
                  </s.Category>
                  <s.Category onClick={() => closeCategory()}>
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
                  </s.Category>
                  <s.Category>
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
                  </s.Category>
               </s.Categories>
               <MenuSideBar closeCategory={closeCategory} />
            </s.Top>
            <s.Bottom>
               <Link href="/">
                  <a>
                     <s.Link>
                        <s.PhoneIcon />
                        <p>0123456789</p>
                     </s.Link>
                  </a>
               </Link>
               <Link href="/">
                  <a>
                     <s.Link>
                        <s.EnvelopeIcon />
                        <p>thecameliavn@gmail.com</p>
                     </s.Link>
                  </a>
               </Link>
            </s.Bottom>
         </s.Content>
         <s.BtnClose onClick={() => closeCategory()}>
            <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
         </s.BtnClose>
         <s.BackGroud onClick={() => closeCategory()} />
      </s.SideBar>
   );
};

export default SideBarCategory;
