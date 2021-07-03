import React from "react";
import Image from "next/image";
import * as s from "../../styles/emotion/StyleAddress";
import { motion } from "framer-motion";

const Address: React.FC = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <s.AddressContentMain>
            <s.AddressContainer>
               <s.Name>CỬA HÀNG</s.Name>
               <s.Top>
                  <s.Des>
                     Hãy ghé thăm cửa hàng của Camelia Brand để xem trực tiếp
                     các sản phẩm nhé!
                  </s.Des>
               </s.Top>
               <s.Center>
                  <s.Title>Hệ thống cửa hàng Camelia Brand:</s.Title>
                  <s.List>
                     <s.Item>
                        Store HCM : 71 Trần Quang Diệu, Phường 14, Quận 3
                     </s.Item>
                     <s.Item>
                        Store HCM : 633 Nguyễn Đình Chiểu, Phường 2, Quận 3
                     </s.Item>
                     <s.Item>
                        Store HCM : 174 Quang Trung, Phường 10, Quận Gò Vấp
                     </s.Item>
                  </s.List>
                  <s.Des>
                     Giờ mở cửa: từ 9AM đến 10PM các ngày trong tuần.
                  </s.Des>
                  <s.Des>
                     <s.PrimaryColor>
                        Chi nhánh 1 tại HCM: 71 Trần Quang Diệu, Phường 14, Quận
                        3, TP Hồ Chí Minh.
                     </s.PrimaryColor>
                  </s.Des>
                  <s.ImageBox>
                     <Image
                        src="https://file.hstatic.net/1000365849/file/756765_48accdfde9d74f1f9a6577056735c791.jpg"
                        width={2048}
                        height={1327}
                        layout="responsive"
                        quality={100}
                        alt="Chi nhánh 1"
                     />
                  </s.ImageBox>
                  <s.ImageBox>
                     <Image
                        src="https://file.hstatic.net/1000365849/file/54645654654654_90bd324e36214555a2810b8a0300edde.jpg"
                        width={2048}
                        height={1372}
                        layout="responsive"
                        quality={100}
                        alt="Chi nhánh 1"
                     />
                  </s.ImageBox>
                  <s.Des>
                     <s.PrimaryColor>
                        Chi nhánh 2 tại HCM: 174 Quang Trung, Phường 10, Quận Gò
                        Vấp, TP Hồ Chí Minh.
                     </s.PrimaryColor>
                  </s.Des>
                  <s.ImageBox>
                     <Image
                        src="https://file.hstatic.net/1000365849/file/xxxxxxx_5b912457b35049e090ad858c1bf57716.jpg"
                        width={1200}
                        height={1000}
                        layout="responsive"
                        quality={100}
                        alt="Chi nhánh 2"
                     />
                  </s.ImageBox>
                  <s.ImageBox>
                     <Image
                        src="https://file.hstatic.net/1000365849/file/cccccc_24307db91fa24e438a403876f5ff4400.jpg"
                        width={1670}
                        height={1120}
                        layout="responsive"
                        quality={100}
                        alt="Chi nhánh 2"
                     />
                  </s.ImageBox>
                  <s.Des>
                     <s.PrimaryColor>
                        Chi nhánh 3 tại HCM: 633 Nguyễn Đình Chiểu, Phường 2,
                        Quận 3.
                     </s.PrimaryColor>
                  </s.Des>
                  <s.ImageBox>
                     <Image
                        src="https://file.hstatic.net/1000365849/file/aaaaaaaaa_86df97512f7b412eaaea0f0f4d478d8b.jpg"
                        width={1200}
                        height={1000}
                        layout="responsive"
                        quality={100}
                        alt="Chi nhánh 3"
                     />
                  </s.ImageBox>
                  <s.ImageBox>
                     <Image
                        src="https://file.hstatic.net/1000365849/file/ban_do_2_c71c2d5803654cf69132c03702ec5e1f.jpg"
                        width={2048}
                        height={1372}
                        layout="responsive"
                        quality={100}
                        alt="Chi nhánh 3"
                     />
                  </s.ImageBox>
               </s.Center>
               <s.Bottom>
                  Nếu quý khách có bất kỳ yêu cầu hay thắc mắc nào hoặc không
                  hài lòng về sản phẩm/dịch vụ của Camelia Brand, hãy liên hệ
                  với chúng tôi tại thecameliavn@gmail.com hoặc 0909140170.
               </s.Bottom>
            </s.AddressContainer>
         </s.AddressContentMain>
      </motion.div>
   );
};

export default Address;
