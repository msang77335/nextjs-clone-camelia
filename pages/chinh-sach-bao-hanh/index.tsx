import React from "react";
import Head from "next/head";
import * as s from "../../styles/emotion/StyleGuarantee";
import { motion } from "framer-motion";

const Guarantee: React.FC = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <Head>
            <title>Camelia Barnd - Chính sách bảo hành</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width, maximum-scale=1"
            />
         </Head>
         <s.GuaranteeContentMain>
            <s.GuaranteeContainer>
               <s.Name as="h2">CHÍNH SÁCH BẢO HÀNH</s.Name>
               <s.Top>
                  <s.Des>
                     Camelia Brand cam kết bảo hành trọn đời cho tất cả sản phẩm
                     của chúng tôi.
                  </s.Des>
               </s.Top>
               <s.Center>
                  <s.Block>
                     <s.Title as="h4">1. Điều kiện bảo hành</s.Title>
                     <s.Des>
                        Xuất hiện lỗi kỹ thuật trên bất kỳ bộ phận nào của sản
                        phẩm.
                     </s.Des>
                  </s.Block>
                  <s.Block>
                     <s.Title as="h4">2. Quy trình bảo hành</s.Title>
                     <s.Des>
                        <s.Bold>Bước 1:</s.Bold> Quý khách vui lòng gọi điện đến
                        hotline 0909140170 để yêu cầu tiếp nhận sản phẩm.
                     </s.Des>
                     <s.Des>
                        <s.Bold>Bước 2:</s.Bold> Camelia Brand thực hiện bảo
                        hành và thông báo thời gian bảo hành cho quý khách.
                     </s.Des>
                     <s.Des>
                        <s.Bold>Bước 3:</s.Bold> Hoàn tất bảo hành, Camelia
                        Brand liên hệ với khách hàng để hẹn thời gian và địa
                        điểm giao trả sản phẩm bảo hành.
                     </s.Des>
                  </s.Block>
               </s.Center>
               <s.Bottom>
                  <s.Des>
                     Nếu quý khách có bất kỳ yêu cầu hay thắc mắc nào hoặc không
                     hài lòng về sản phẩm/dịch vụ của Camelia, hãy liên hệ với
                     chúng tôi tại thecameliavn@gmail.com hoặc 0909140170.
                  </s.Des>
               </s.Bottom>
            </s.GuaranteeContainer>
         </s.GuaranteeContentMain>
      </motion.div>
   );
};

export default Guarantee;
