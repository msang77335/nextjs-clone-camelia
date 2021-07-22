import React, { ReactChild, ReactChildren } from "react";
import Head from "next/head";

interface Props {
   children: ReactChild | ReactChild[] | ReactChildren | ReactChildren[];
}

const EmtpyLayout: React.FC<Props> = ({ children }) => {
   return (
      <div>
         <Head>
            <link rel="shortcut icon" href="/logo.webp" />
         </Head>
         {children}
      </div>
   );
};

export default EmtpyLayout;
