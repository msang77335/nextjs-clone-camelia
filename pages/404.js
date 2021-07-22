import React from "react";
import EmtpyLayout from "../components/EmtpyLayout";
import * as s from "../styles/emotion/StyleNotFound";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const NotFound = () => {
   return (
      <div>
         <Head>
            <title>404 - Camelia Brand</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width, maximum-scale=1"
            />
         </Head>
         <s.Wrapper>
            <s.Content>
               <Link href="/">
                  <a>
                     <s.Logo>
                        <Image
                           src="http://theme.hstatic.net/1000365849/1000614631/14/logo.png?v=78"
                           alt="Home"
                           layout="fill"
                        />
                     </s.Logo>
                  </a>
               </Link>
               <s.Title>404</s.Title>
               <s.Text>Xin lỗi, trang bạn tìm kiếm không tồn tại!</s.Text>
            </s.Content>
         </s.Wrapper>
      </div>
   );
};

NotFound.Layout = EmtpyLayout;

export default NotFound;
