import React from "react";
import MessIcon from "../assets/images/messenger.svg";
import * as s from "../styles/emotion/StyleMessenger";

const Messenger: React.FC = () => {
   return (
      <s.Box href="/">
         <img src={MessIcon} alt="" />
      </s.Box>
   );
};

export default Messenger;
