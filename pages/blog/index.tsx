import Link from "next/link";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import * as s from "../../styles/emotion/StyleBlog";
import { motion } from "framer-motion";

const Blog: React.FC = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <Head>
            <title>Camelia Barnd - Blog</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width"
            />
         </Head>
         <s.BlogContentMain>
            <s.BlogContainer>
               <s.Name>
                  KENH14.VN: GỌN MÀ CHẤT VỚI NHỮNG ITEMS ĐƯỢC GIỚI TRẺ ƯA CHUỘNG
               </s.Name>
               <s.Link>
                  <Link href=" http://kenh14.vn/gon-ma-chat-voi-nhung-items-duoc-gioi-tre-ua-chuong-2019071601143685.chn">
                     http://kenh14.vn/gon-ma-chat-voi-nhung-items-duoc-gioi-tre-ua-chuong-2019071601143685.chn
                  </Link>
               </s.Link>
               <s.Block>
                  <s.Des>
                     Chẳng cần cầu kì, màu sắc, những items với phong cách tối
                     giản vẫn khiến giới trẻ &quot;phát cuồng&quot; vì sự thoải
                     mái, trẻ trung mà nó mang lại.
                  </s.Des>
                  <Image
                     src="https://file.hstatic.net/1000365849/file/2vicamelia_9212ebebf5ca47399fb2eec80a6b2c02.jpg"
                     alt="Picture of the author"
                     width={1200}
                     height={800}
                  />
                  <s.Des>
                     Phong cách thời trang tối giản – minimalism được nhiều
                     fashionista ưa chuộng bởi sự thời thượng, nổi bật cũng như
                     tính ứng dụng cao của nó. Ra đời từ những năm 20, phong
                     cách thời trang tối giản đến nay vẫn chưa bao giờ lỗi mốt
                     và có dấu hiệu giảm nhiệt.
                  </s.Des>
                  <s.Des>
                     Phổ biến không chỉ trong giới thời trang, minimalism hiện
                     nay còn lan tỏa rộng rãi trong cộng đồng giới trẻ bởi sự
                     đơn giản, tinh tế lại không kém phần thời thượng. Giờ đây,
                     thay vì diện những bộ cánh kiểu cách, với nhiều hình thù,
                     hoạ tiết, người trẻ thường chọn những item đơn sắc, gọn
                     gàng và mix thật đơn giản để tạo nên những set đồ
                     &quot;chất ngất&quot;, phù hợp với mọi bối cảnh. Các nhãn
                     hàng, thương hiệu thời trang từ đó cũng cho ra đời rất
                     nhiều sản phẩm theo phong cách đơn giản, tiện lợi nhất,
                     hướng tới vẻ đẹp tinh tế, thanh lịch và những giá trị ý
                     nghĩa cho giới trẻ.
                  </s.Des>
                  <s.Des>
                     Hiện nay, một trong những thương hiệu hàng đầu trong phong
                     cách minimalism phải kể đến Camelia - nơi sở hữu nhiều item
                     túi, ví, balo tối giản được đông đảo giới trẻ ưa chuộng.
                     Nếu đang theo đuổi phong cách tối giản thì còn chờ gì nữa
                     mà không khám phá ngay Camelia thôi!
                  </s.Des>
               </s.Block>
               <s.Block>
                  <s.Title>Thiết kế đơn giản nhưng không đơn điệu</s.Title>
                  <s.Des>
                     Hướng đến phong cách tối giản không cầu kì, mọi item của
                     Camelia đều được thiết kế tinh giản đến tối đa những chi
                     tiết. Kiểu dáng của các loại balo, túi, ví cũng được làm
                     gọn gàng nhất cho người sử dụng.
                  </s.Des>
                  <s.Des>
                     Sắc màu Camelia lựa chọn cho sản phẩm đều rất nền nã, trung
                     tính với các gam màu cơ bản như đen, nâu, ghi... để người
                     diện dễ dàng kết hợp chúng lại với nhau mà chẳng tốn quá
                     nhiều công sức hay phải đau đầu suy nghĩ. Với mẫu mã được
                     thiết kế đơn giản, không bao giờ lỗi mốt, một chiếc ví, túi
                     xách hay balo của Camelia có thể trưng dụng được rất nhiều
                     lần cho những set đồ khác nhau mà vẫn giữ nguyên nét mới
                     mẻ, thời thượng.
                  </s.Des>
                  <Image
                     src="https://file.hstatic.net/1000365849/file/3tuicheocamelia_e270461071264fa984c63d5282f2dcdd.jpg"
                     alt="Picture of the author"
                     width={1200}
                     height={800}
                  />
                  <s.Des>
                     Sắc màu Camelia lựa chọn cho sản phẩm đều rất nền nã, trung
                     tính với các gam màu cơ bản như đen, nâu, ghi,...để người
                     diện dễ dàng kết hợp với các set đồ khác nhau.
                  </s.Des>
                  <s.Des>
                     Người trẻ có thể chọn túi xách hay balo của Camelia để đi
                     làm, đi chơi hay đi du lịch đều rất thoải mái. Không cần
                     mua quá nhiều, chỉ cần một sản phẩm của Camelia thôi là bạn
                     đã có thể tự tin đi khắp nơi, đẹp mọi lúc rồi.
                  </s.Des>
               </s.Block>
               <s.Block>
                  <s.Title>
                     Đựng đồ &quot;thả ga&quot; với thiết kế bên trong tối ưu
                  </s.Title>
                  <s.Des>
                     Ngoài tiêu chí đơn giản, gọn gàng thì sản phẩm của Camelia
                     còn hướng đến sự tiện lợi. Với mỗi sản phẩm của Camelia,
                     bạn sẽ không phải lo lắng về những rắc rối trong việc sắp
                     xếp đồ dùng hàng ngày của bạn mỗi khi ra đường. Bởi lẽ,
                     thiết kế bên trong của sản phẩm đã được tinh chỉnh tối ưu
                     để bạn có thể đựng đồ thoải mái mà vẫn ngăn nắp, gọn gàng.
                  </s.Des>
                  <Image
                     src="https://file.hstatic.net/1000365849/file/6balocamelia_296321f0f6c84c8593ed8d478485e002.jpg"
                     alt="Picture of the author"
                     width={1200}
                     height={800}
                  />
                  <s.Des>
                     Ngoài tiêu chí đơn giản, gọn gàng để người dùng sử dụng
                     trong mọi trường hợp thì sản phẩm của Camelia còn hướng đến
                     sự tiện lợi.
                  </s.Des>
                  <s.Des>
                     Ngoài những ngăn đựng đồ rộng để bạn có thể thoải mái đem
                     theo &quot;cả thế giới&quot; thì balo, túi xách của Camelia
                     còn có những túi nhỏ bên trong được thiết kế nhiều kích
                     thước khác nhau. Với những ngăn nhỏ này, bạn có thể để
                     những đồ dùng dễ rơi như chìa khóa, đồ dùng cá nhân. Mọi
                     chi tiết bên trong túi xách, ví hay balo dù là nhỏ nhất đều
                     được tận dụng để tạo nên những công năng khác nhau.
                  </s.Des>
               </s.Block>
               <s.Block>
                  <s.Title>
                     Chất liệu chọn lọc đem đến sản phẩm chất lượng
                  </s.Title>
                  <s.Des>
                     Với mong muốn được đem đến sản phẩm có giá trị sử dụng lâu
                     bền nhất đối với người dùng, Camelia đã lựa chọn loại vải
                     vải 900D tráng PU chống thấm nước để cho ra đời những chiếc
                     balo, túi, ví chất lượng. Đây cũng là loại vải hiếm có ở
                     Việt Nam mà Camelia đã cất công tìm kiếm.
                  </s.Des>
                  <Image
                     src="https://file.hstatic.net/1000365849/file/4tuinhocamelia_4c56f8bc63cc4b9faba032a7419c5f4f.jpg"
                     alt="Picture of the author"
                     width={1200}
                     height={800}
                  />
                  <s.Des>
                     Chất liệu của túi Camelia là loại vải 900D hiếm có tại Việt
                     Nam, đảm bảo đem đến cho khách hàng sản phẩm chất lượng
                  </s.Des>
                  <s.Des>
                     Nếu đã sở hữu một sản phẩm của Camelia, sẽ rất dễ dàng để
                     nhận ra sự tâm huyết, cẩn thận của nhà sản xuất trong từng
                     sản phẩm. Sợi vải được dệt to hơn, các đường kim, mũi chỉ
                     được gia công tỉ mỉ và đặc biệt, khóa kéo cũng được chọn từ
                     nhóm các loại tốt nhất. Vậy nên, dù Camelia hướng tới đơn
                     giản trong kiểu dáng, mẫu mã nhưng những chất lượng sản
                     phẩm thì không hề &quot;đơn giản&quot; chút nào.
                  </s.Des>
                  <s.Des>
                     Không chỉ bắt kịp theo xu hướng và tạo ra những sản phẩm
                     &quot;được lòng&quot; giới trẻ, Camelia còn muốn thông qua
                     sản phẩm của mình để truyền tải thông điệp về lối sống tối
                     giản đến với mỗi người. Khi lựa chọn phong cách tối giản,
                     bạn sẽ không cần quá nhiều đồ đạc, phụ kiện. Tủ đồ chỉ cần
                     những items tối giản sẽ khiến cuộc sống của bạn trở nên đơn
                     giản hơn, tiện lợi hơn và tiết kiệm được nhiều thời gian
                     hơn.
                  </s.Des>
                  <s.Des>
                     Nếu vẫn đang băn khoăn không biết bắt đầu phong cách tối
                     giản từ đâu, sống đơn giản hơn thế nào thì hãy để những sản
                     phẩm của Camelia giúp bạn nhé!
                  </s.Des>
                  <s.Bottom>- Kenh14.vn -</s.Bottom>
               </s.Block>
            </s.BlogContainer>
         </s.BlogContentMain>
      </motion.div>
   );
};

export default Blog;
