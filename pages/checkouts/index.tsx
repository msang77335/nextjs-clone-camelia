import React from "react";
import * as s from "../../styles/emotion/StyleCheckouts";
import Link from "next/link";
const Checkouts: React.FC = () => {
   return (
      <s.CheckoutsContainer>
         <s.Title>
            <Link href="/">
               <a>Camelia Brand</a>
            </Link>
         </s.Title>
         <s.FormTitle>Thông tin khách hàng</s.FormTitle>
         <s.Form>
            <s.FormRow>
               <s.Input placeholder="Tên của bạn" />
            </s.FormRow>
            <s.FormRow>
               <s.Email>
                  <s.Input placeholder="Email (không bắt buộc)" />
               </s.Email>
               <s.Phone>
                  <s.Input placeholder="Số điện thoại" />
               </s.Phone>
            </s.FormRow>
            <s.FormRow>
               <s.Input placeholder="Số nhà và tên đường" />
            </s.FormRow>
         </s.Form>
      </s.CheckoutsContainer>
   );
};

export default Checkouts;
