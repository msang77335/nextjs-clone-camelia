import React from "react";
import * as s from "../styles/emotion/StyleSendMail";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SendMail: React.FC = () => {
   return (
      <s.Box>
         <s.Input type="text" placeholder="Nhập email của bạn..." />
         <s.Submit>
            <FontAwesomeIcon icon={faPaperPlane} />
         </s.Submit>
      </s.Box>
   );
};

export default SendMail;
