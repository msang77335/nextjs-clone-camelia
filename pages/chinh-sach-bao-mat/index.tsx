import React from "react";
import Head from "next/head";
import * as s from "../../styles/emotion/StyleSecurity";
import { motion } from "framer-motion";

const Security: React.FC = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <Head>
            <title>Camelia Barnd - Chính sách bảo mật</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <s.SecurityContentMain>
            <s.SecurityContainer>
               <s.Name>CHÍNH SÁCH BẢO MẬT</s.Name>
               <s.Top>
                  <s.Des>
                     Camelia Brand tuyệt đối bảo vệ thông tin danh tính của
                     khách hàng và hoàn toàn chấp hành Nghị định Chính phủ về
                     Bảo mật 52/2013/NĐ-CP.
                  </s.Des>
               </s.Top>
               <s.Center>
                  <s.Block>
                     <s.Title as="h4">1. Thu thập thông tin cá nhân</s.Title>
                     <s.Des>
                        Khi quý khách đến thăm Camelia.vn, máy chủ của công ty
                        chúng tôi sẽ tự động lưu trữ thông tin mà trình duyệt
                        của quý khách gửi đến. Những thông tin này bao gồm:{" "}
                     </s.Des>
                     <s.List>
                        <s.Item>Địa chỉ IP của quý khách</s.Item>
                        <s.Item>Loại trình duyệt</s.Item>
                        <s.Item>
                           Các trang website mà quý khách đã ghé thăm trước đó
                        </s.Item>
                        <s.Item>
                           Những trang mục trong Camelia.vn mà quý khách ghé
                           thăm
                        </s.Item>
                        <s.Item>
                           Khoảng thời gian quý khách giành ra đã xem những
                           trang mục đó, sản phẩm, tìm kiếm thông tin trên trang
                           web, thời gian và ngày tháng truy cập, và các số liệu
                           thống kê khác.
                        </s.Item>
                     </s.List>
                     <s.Des>
                        Các thông tin đó được thu thập cho mục đích phân tích và
                        đánh giá để góp phần cải thiện trang web, dịch vụ, và
                        sản phẩm mà chúng tôi cung cấp. Những dữ liệu đó sẽ
                        không có liên quan gì đến các thông tin cá nhân khác.
                     </s.Des>
                     <s.Des>
                        Khi quý khách mua hàng tại Camelia, thông tin cá nhân mà
                        chúng tôi thu thập bao gồm:{" "}
                     </s.Des>
                     <s.List>
                        <s.Item>Tên</s.Item>
                        <s.Item>Địa chỉ giao hàng</s.Item>
                        <s.Item>Địa chỉ Email</s.Item>
                        <s.Item>Số điện thoại di động</s.Item>
                     </s.List>
                     <s.Des>
                        Những thông tin trên sẽ được sử dụng cho một hoặc tất cả
                        các mục đích sau đây:
                     </s.Des>
                     <s.List>
                        <s.Item>Giao hàng quý khách đã mua tại Camelia</s.Item>
                        <s.Item>
                           Thông báo về việc giao hàng và hỗ trợ khách hàng
                        </s.Item>
                        <s.Item>
                           Cung cấp thông tin liên quan đến sản phẩm
                        </s.Item>
                        <s.Item>Xử lý đơn đặt hàng </s.Item>
                     </s.List>
                     <s.Des>
                        Khi quý khách đăng ký nhận thông tin trên trang web
                        Camelia.vn chúng tôi cũng sẽ sử dụng email của quý khách
                        để gửi thông tin mới nhất về các chương trình, sản phẩm.
                        Quý khách có thể hủy nhận các thông tin đó bất cứ lúc
                        nào bằng cách sử dụng chức năng hủy đăng ký trong các
                        thông báo.
                     </s.Des>
                  </s.Block>
                  <s.Block>
                     <s.Title as="h4">2. Bảo mật thông tin cá nhân</s.Title>
                     <s.Des>
                        Camelia Brand không bán, chia sẻ hay trao đổi thông tin
                        cá nhân của khách hàng thu thập trên trang web cho một
                        bên thứ ba nào khác.
                     </s.Des>
                     <s.Des>
                        Thông tin cá nhân thu thập được sẽ chỉ được sử dụng
                        trong nội bộ công ty.
                     </s.Des>
                     <s.Des>
                        Camelia Brand đảm bảo rằng mọi thông tin thu thập được
                        sẽ được lưu giữ an toàn. Chúng tôi bảo vệ thông tin cá
                        nhân của quý khách bằng cách:{" "}
                     </s.Des>
                     <s.List>
                        <s.Item>
                           Sử dụng sản phẩm công nghệ để ngăn chặn truy cập máy
                           tính trái phép.
                        </s.Item>
                        <s.Item>
                           Xóa thông tin cá nhân của quý khách khi nó không còn
                           cần thiết cho mục đích lưu trữ hồ sơ của chúng tôi.
                        </s.Item>
                     </s.List>
                     <s.Des>
                        Chúng tôi sẽ không chia sẻ thông tin của quý khách cho
                        bất kỳ một công ty nào khác ngoại trừ những công ty và
                        các bên thứ ba có liên quan trực tiếp đến việc giao hàng
                        mà quý khách đã mua tại Camelia Brand. Chúng tôi cam kết
                        tuân thủ Đạo luật Bảo mật và các Nguyên tắc Bảo mật Quốc
                        gia.
                     </s.Des>
                  </s.Block>
                  <s.Block>
                     <s.Title as="h4">
                        3. Thay đổi của Chính sách bảo mật
                     </s.Title>
                     <s.Des>
                        Camelia Brand có quyền thay đổi và chỉnh sửa Quy định
                        bảo mật. Bất kỳ thay đổi nào về chính sách này đều được
                        công bố trên trang chủ website của chúng tôi.
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
            </s.SecurityContainer>
         </s.SecurityContentMain>
      </motion.div>
   );
};

export default Security;
