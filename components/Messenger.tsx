import React from "react";
import Image from "next/image";
import MessIcon from "../assets/images/messenger.svg";
import * as s from "../styles/emotion/StyleMessenger";

const Messenger: React.FC = () => {
   return (
      <s.Box href="https://m.me/camelia.vn" target="_blank">
         <Image src={MessIcon} width={40} height={40} alt="Messenger" />
      </s.Box>
   );
};

export default Messenger;
