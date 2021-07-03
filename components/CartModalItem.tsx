import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as s from "../styles/emotion/StyleCartModalItem";

const CartModalItem: React.FC = () => {
   return (
      <s.Item>
         <s.Left>
            <s.ImageBox>
               <Image
                  src="http://product.hstatic.net/1000365849/product/11balocamelia_bfd424d0f91c44cfaf84a404bbd34d35_master.jpg"
                  width={100}
                  height={100}
                  alt="Product name"
               />
            </s.ImageBox>
            <s.InfoList>
               <s.InfoItem>
                  <Link href="">
                     <a>
                        <s.Name>Global Backpack</s.Name>
                     </a>
                  </Link>
               </s.InfoItem>
               <s.InfoItem>
                  <s.Color>Phiên bản: Black</s.Color>
               </s.InfoItem>
               <s.InfoItem>
                  <s.Quantity>Số lượng: 1</s.Quantity>
               </s.InfoItem>
               <s.InfoItem>
                  <s.Price>450,000đ</s.Price>
               </s.InfoItem>
            </s.InfoList>
         </s.Left>
         <s.Right>
            <s.BtnDel>Xóa</s.BtnDel>
         </s.Right>
      </s.Item>
   );
};

export default CartModalItem;
