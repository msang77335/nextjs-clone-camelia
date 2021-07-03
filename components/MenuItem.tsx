import React, { ReactChild, ReactChildren } from "react";
import * as s from "../styles/emotion/StyleMenu";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
   href?: string;
   children?:
      | ReactChild
      | ReactChild[]
      | ReactChildren
      | ReactChildren[]
      | String;
}

const MenuItem: React.FC<Props> = ({ href, children }) => {
   const router = useRouter();
   if (router.pathname === href) {
      return (
         <Link href={href}>
            <a>
               <s.Link isActive>{children}</s.Link>
            </a>
         </Link>
      );
   } else {
      return (
         <Link href={href}>
            <a>
               <s.Link>{children}</s.Link>
            </a>
         </Link>
      );
   }
};

export default MenuItem;
