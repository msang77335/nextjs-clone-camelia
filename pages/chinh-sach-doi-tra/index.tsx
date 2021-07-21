import React from "react";
import Head from "next/head";
import * as s from "../../styles/emotion/StyleExchange";
import { motion } from "framer-motion";

const Exchange: React.FC = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <Head>
            <title>Camelia Barnd - Chính sách đổi trả</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width, maximum-scale=1"
            />
         </Head>
         <s.ExchangeContentMain>
            <s.ExchangeContainer>
               <s.Name>CHÍNH SÁCH ĐỔI TRẢ</s.Name>
               <s.Top>
                  <s.Des>
                     Camelia Brand luôn cố gắng hạn chế tối đa những sai sót làm
                     ảnh hưởng xấu đến trải nghiệm của khách hàng.
                  </s.Des>
               </s.Top>
               <s.Center>
                  <s.Block>
                     <s.Title>1. Điều kiện đổi trả</s.Title>
                     <s.Des>
                        Quý khách có thể đổi trả hàng trong những trường hợp
                        sau:
                     </s.Des>
                     <s.List>
                        <s.Item>
                           Sản phẩm không đúng chất lượng và thông số như trên
                           Website.
                        </s.Item>
                        <s.Item>
                           Sản phẩm không đúng mẫu mã, màu sắc như đơn hàng đã
                           đặt.
                        </s.Item>
                        <s.Item>
                           Sản phẩm xuất hiện lỗi kỹ thuật từ nhà sản xuất.
                        </s.Item>
                     </s.List>
                     <s.Des>
                        Lưu ý: Các bạn vui lòng thông báo đổi trả trong vòng 7
                        ngày kể từ khi nhận sản phẩm.
                     </s.Des>
                  </s.Block>
                  <s.Block>
                     <s.Title>2. Quy trình đổi trả</s.Title>
                     <s.Des>
                        Hãy liên lạc cho chúng tôi qua hotline 0909140170 để
                        thông báo về đơn hàng gặp sự cố ngoài mong muốn của bạn.
                     </s.Des>
                     <s.Des>
                        Chúng tôi sẽ tiến hành đổi trả sản phẩm ngay cho bạn
                        hoàn toàn miễn phí.
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
            </s.ExchangeContainer>
         </s.ExchangeContentMain>
      </motion.div>
   );
};

export default Exchange;
