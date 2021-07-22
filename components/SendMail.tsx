import React from "react";
import * as s from "../styles/emotion/StyleSendMail";

const SendMail: React.FC = () => {
   return (
      <s.Box>
         <s.Input type="text" placeholder="Nhập email của bạn..." />
         <s.Submit>
            <s.PaperPlaneIcon />
         </s.Submit>
      </s.Box>
   );
};

export default SendMail;
