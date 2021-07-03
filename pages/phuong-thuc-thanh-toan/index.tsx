import React from "react";
import Image from "next/image";
import * as s from "../../styles/emotion/StylePayment";
import { motion } from "framer-motion";

const Payment: React.FC = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <s.PaymentContentMain>
            <s.PaymentContainer>
               <s.Name>PHƯƠNG THỨC THANH TOÁN</s.Name>
               <s.Top>
                  <s.Des>
                     Các bạn có thể lựa chọn 2 hình thức thanh toán sau khi mua
                     sắm trực tuyến tại camelia.vn
                  </s.Des>
               </s.Top>
               <s.Center>
                  <s.Block>
                     <s.Title>
                        1. Thanh toán tiền mặt khi nhận hàng (COD)
                     </s.Title>
                     <s.Des>
                        Bước 1: Các bạn mua hàng tại website camelia.vn và chọn
                        &apos;Thanh toán&apos;
                     </s.Des>
                     <s.Des>
                        Bước 2: Chọn ô &apos;Thanh toán tiền mặt khi nhận
                        hàng&apos; sau đó chọn &apos;Hoàn tất&apos;
                     </s.Des>
                     <s.Image>
                        <Image
                           width="1055"
                           height="846"
                           layout="responsive"
                           quality="100"
                           src="https://file.hstatic.net/1000365849/file/phuongthucthanhtoantienmatcamelia_29a9d5846e314795b667f72251671104.jpg"
                           alt="Thanh toán tiền mặt"
                        />
                     </s.Image>
                     <s.Des>
                        Đã hoàn tất! Nhân viên giao hàng sẽ nhận tiền mặt của
                        bạn sau khi giao hàng.
                     </s.Des>
                     <s.Des>
                        Chúng tôi sẽ liên lạc cho bạn trước khi sản phẩm đến
                        nơi.
                     </s.Des>
                  </s.Block>
                  <s.Block>
                     <s.Title>2. Chuyển khoản ngân hàng</s.Title>
                     <s.Des>
                        Bước 1: Các bạn mua hàng tại website camelia.vn và chọn
                        &apos;Thanh toán&apos;
                     </s.Des>
                     <s.Des>
                        Bước 2: Chọn ô &apos;Chuyển khoản ngân hàng&apos; và làm
                        theo hướng dẫn cụ thể phía dưới
                     </s.Des>
                     <s.Image>
                        <Image
                           width="1047"
                           height="1073"
                           layout="responsive"
                           quality="100"
                           src="https://file.hstatic.net/1000365849/file/phuongthucthanhtoanonlinecamelia_6edcd0da46d843ac9b7968cb7fd362ca.jpg"
                           alt="Thanh toán chuyển khoản"
                        />
                     </s.Image>
                     <s.Des>
                        Đã hoàn tất! Camelia sẽ giao hàng cho bạn ngay khi chúng
                        tôi vừa nhận được tiền.
                     </s.Des>
                     <s.Des>
                        Chúng tôi sẽ liên lạc cho bạn trước khi sản phẩm đến
                        nơi.
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
            </s.PaymentContainer>
         </s.PaymentContentMain>
      </motion.div>
   );
};

export default Payment;
