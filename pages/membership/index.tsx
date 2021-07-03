import React from "react";
import Image from "next/image";
import * as s from "../../styles/emotion/StyleMembersShip";
import { motion } from "framer-motion";

const Membership: React.FC = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <s.MembersShipContentMain>
            <s.MembersShipContainer>
               <s.Title as="h2">MEMBERSHIP</s.Title>
               <s.ImageBox>
                  <Image
                     quality={100}
                     src="https://file.hstatic.net/1000365849/file/dadadad_b23f35981acb46d9b0aae8d94e6f665e.jpg"
                     width={2048}
                     height={1952}
                     alt="Ưu đãi"
                  ></Image>
               </s.ImageBox>
               <s.Title as="h2">
                  CHƯƠNG TRÌNH KHÁCH HÀNG THÂN THIẾT CAMELIA BRAND
               </s.Title>
               <s.Des>
                  Từ những sự
                  <s.Bold>
                     <s.Italic> ưu ái hết sức đặc biệt </s.Italic>
                  </s.Bold>
                  của các bạn đã dành cho Camelia trong thời gian vừa qua khi có
                  rất nhiều khách hàng đã sở hữu nhiều sản phẩm, ủng hộ và yêu
                  thích Camelia Brand. Chúng mình thật sự trân trọng điều đó.
               </s.Des>
               <s.Des>
                  Chương trình khách hàng thân thiết ra đời, với mục tiêu nâng
                  cao trải nghiệm khách hàng và
                  <s.Bold>tri ân nhiều hơn</s.Bold>
                  những khách hàng đã đồng hành cùng Camelia Brand từ những ngày
                  đầu tiên.
               </s.Des>
               <s.Block>
                  <s.Title as="h4">1. Cách thức hoạt động</s.Title>
                  <s.Des>
                     - Bạn sẽ được
                     <s.RedColor> tự động cập nhật </s.RedColor>chi tiêu tích
                     lũy khách hàng thân thiết ngay khi mua sản phẩm bất kỳ từ
                     Camelia Brand.
                  </s.Des>
                  <s.Des>
                     - Camelia Brand quản lý chi tiêu tích lũy của bạn theo số
                     điện thoại đặt hàng,
                     <s.RedColor>
                        {" "}
                        thẻ Membership và Voucher sẽ được phát hành và gửi đến
                        tận tay{" "}
                     </s.RedColor>
                     bạn hoàn toàn miễn phí khi bạn đủ điều kiện sở hữu.
                  </s.Des>
                  <s.Des>
                     - Khách hàng mua hàng tại cửa hàng xuất trình thẻ hoặc chỉ
                     cần đọc số điện thoại là có thể tích luỹ điểm.
                  </s.Des>
                  <s.Des>
                     - Khách hàng mua hàng online trên
                     Website/Facebook/Instagram đều được
                     <s.RedColor> luỹ điểm tự động </s.RedColor>
                     như mua tại cửa hàng.
                  </s.Des>
                  <s.Des>
                     - Khách hàng mua hàng online trên website chỉ cần nhập
                     <s.RedColor>
                        {" "}
                        số điện thoại mua hàng của mình vào ô &apos;Code&apos;{" "}
                     </s.RedColor>
                     tại Trang thanh toán là có thể nhận được Quyền lợi đúng của
                     hạng thẻ mình đang sở hữu. (Trong trường hợp khách hàng
                     chưa trở thành thành viên của Membership Program, các bạn
                     đặt đơn hàng không cần nhập số điện thoại vào ô
                     &apos;Code&apos; chúng mình sẽ tự động cập nhật tích luỹ)
                  </s.Des>{" "}
               </s.Block>
               <s.Block>
                  <s.Title as="h4">2. Quy định sử dụng</s.Title>
                  <s.Des>
                     - Điểm tích lũy có giá trị từ ngày{" "}
                     <s.Bold> 01/06/2020 đến hết ngày 01/06/2021.</s.Bold>
                  </s.Des>
                  <s.Des>
                     - Tất cả đơn hàng trước đây từ trước khi chương trình khách
                     hàng thân thiết ra đời đều được tính tích luỹ điểm nhằm tri
                     ân những khách hàng đã đồng hành cùng Camelia từ những ngày
                     đầu tiên.
                  </s.Des>
                  <s.Des>
                     - Những ưu đãi của hạng thẻ được áp dụng kèm với các chương
                     trình khuyến mãi khác.
                  </s.Des>
               </s.Block>
               <s.Block>
                  <s.Title as="h4"> 3. Các ưu đãi và hạng mức thẻ</s.Title>
                  <s.Des>
                     Điểm tích luỹ được tính theo giá trị đơn hàng, mỗi giá trị
                     tích luỹ khác nhau tương ứng với các hạng thẻ khác nhau.
                  </s.Des>
                  <s.Title as="h4">
                     <s.Italic> 3.1. Loyal Member: </s.Italic>
                  </s.Title>
                  <s.Des>
                     Điểm tích luỹ: Tổng giá trị đơn hàng đạt mức
                     <s.Underline> 2.000.000 VNĐ.</s.Underline>
                  </s.Des>
                  <s.Des>
                     Ưu đãi
                     <s.RedColor>
                        <s.Bold> giảm giá 10% </s.Bold>
                        toàn bộ đơn hàng.
                     </s.RedColor>
                  </s.Des>
                  <s.Des> Ưu đãi giảm giá 20% vào ngày sinh nhật.</s.Des>
                  <s.Des>Nhận voucher trị giá 100.000VNĐ khi thăng hạng.</s.Des>
                  <s.Des>
                     Và còn nhiều phần quà bí ẩn khác sẽ được gửi đến bạn trong
                     suốt quá trình trở thành Loyal Member.
                  </s.Des>
                  <s.Title as="h4">
                     <s.Italic> 3.2. Premium Member : </s.Italic>
                  </s.Title>
                  <s.Des>
                     - Điểm tích luỹ : Tổng giá trị đơn hàng đạt mức{" "}
                     <s.Underline> 5.000.000 VNĐ. </s.Underline>
                  </s.Des>
                  <s.Des>
                     - Ưu đãi
                     <s.RedColor>
                        <s.Bold> giảm giá 15% </s.Bold>
                     </s.RedColor>
                     toàn bộ đơn hàng.
                  </s.Des>
                  <s.Des>- Ưu đãi giảm giá 30% vào ngày sinh nhật.</s.Des>
                  <s.Des>
                     - Nhận voucher trị giá 300.000VNĐ khi thăng hạng.
                  </s.Des>
                  <s.Des>
                     - Nhận quà tri ân khách hàng cao cấp từ Camelia Brand.
                  </s.Des>
                  <s.Des>
                     Và còn nhiều phần quà bí ẩn khác sẽ được gửi đến bạn trong
                     suốt quá trình trở thành Loyal Member.
                  </s.Des>
                  <s.Title as="h4">
                     <s.Italic> 3.3. VIP Member:</s.Italic>
                  </s.Title>
                  <s.Des>
                     - Điểm tích luỹ: Tổng giá trị đơn hàng đạt mức
                     <s.Underline> 10.000.000 VNĐ. </s.Underline>
                  </s.Des>
                  <s.Des>
                     - Ưu đãi
                     <s.RedColor>
                        <s.Bold> giảm giá 20% </s.Bold>
                     </s.RedColor>
                     toàn bộ đơn hàng.
                  </s.Des>
                  <s.Des>- Ưu đãi giảm giá 40% vào ngày sinh nhật.</s.Des>
                  <s.Des>
                     - Nhận voucher trị giá 500.000VNĐ khi thăng hạng.
                  </s.Des>
                  <s.Des>
                     - Nhận quà
                     <s.RedColor> tri ân khách hàng VIP hằng năm </s.RedColor>
                     từ Camelia Brand.
                  </s.Des>
                  <s.Des>
                     Và còn nhiều phần quà bí ẩn khác sẽ được gửi đến bạn trong
                     suốt quá trình trở thành Loyal Member.
                  </s.Des>
               </s.Block>
               <s.Bottom>
                  <s.Block>
                     <s.Title as="h4">
                        Chúng mình biết các bạn có rất nhiều sự lựa chọn, cảm ơn
                        thật nhiều vì đã chọn chúng mình hôm nay &lt;3
                     </s.Title>
                     <s.Des>
                        Nếu quý khách có bất kỳ yêu cầu hay thắc mắc nào hoặc
                        không hài lòng về sản phẩm/dịch vụ của Camelia, hãy liên
                        hệ với chúng tôi tại thecameliavn@gmail.com hoặc
                        0909140170.
                     </s.Des>
                  </s.Block>
               </s.Bottom>
            </s.MembersShipContainer>
         </s.MembersShipContentMain>
      </motion.div>
   );
};

export default Membership;
