import React from "react";
import * as s from "../styles/emotion/StyleSendMail";
import Link from "next/link";

const SendMail: React.FC = () => {
   return (
      <s.Box>
         <s.Input type="text" placeholder="Nhập email của bạn..." />
         <s.Submit type="button">
            <Link href="/">
               <a>
                  <s.PaperPlaneIcon />
               </a>
            </Link>
         </s.Submit>
      </s.Box>
   );
};

export default SendMail;
