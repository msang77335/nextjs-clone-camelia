import React from "react";
import Head from "next/head";
import * as s from "../../styles/emotion/StyleDelivery";
import { motion } from "framer-motion";

const Delivery: React.FC = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <Head>
            <title>Camelia Barnd - Phương thức giao hàng</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width, maximum-scale=1"
            />
         </Head>
         <s.DeliveryContentMain>
            <s.DeliveryContainer>
               <s.Name>PHƯƠNG THỨC GIAO HÀNG</s.Name>
               <s.Top>
                  <s.Des>
                     Camelia Brand hỗ trợ giao hàng tận nơi toàn Việt Nam.
                  </s.Des>
               </s.Top>
               <s.Center>
                  <s.Block>
                     <s.Title as="h4">1. Phí ship</s.Title>
                     <s.List>
                        <s.Item>TP.HCM: 20.000 VND</s.Item>
                        <s.Item>Nơi khác: 30.000 VND</s.Item>
                     </s.List>
                  </s.Block>
                  <s.Block>
                     <s.Title as="h4">2. Thời gian giao hàng </s.Title>
                     <s.List>
                        <s.Item>TP.HCM: 1-2 ngày (trừ CN)</s.Item>
                        <s.Item>Nơi khác: 2-4 ngày (trừ CN)</s.Item>
                     </s.List>
                     <s.Des>
                        Hàng sẽ được giao lại hoàn toàn miễn phí nếu bạn vắng
                        nhà.
                     </s.Des>
                  </s.Block>
                  <s.Des>
                     *Giao hàng ngoài giờ hành chính chỉ được hỗ trợ đối với khu
                     vực TP.HCM và Hà Nội.
                  </s.Des>
               </s.Center>
               <s.Bottom>
                  <s.Des>
                     Nếu quý khách có bất kỳ yêu cầu hay thắc mắc nào hoặc không
                     hài lòng về sản phẩm/dịch vụ của Camelia, hãy liên hệ với
                     chúng tôi tại thecameliavn@gmail.com hoặc 0909140170.
                  </s.Des>
               </s.Bottom>
            </s.DeliveryContainer>
         </s.DeliveryContentMain>
      </motion.div>
   );
};

export default Delivery;
