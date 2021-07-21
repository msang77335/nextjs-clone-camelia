import React from "react";
import Image from "next/image";
import Head from "next/head";
import * as s from "../../styles/emotion/StyleAbout";
import { motion } from "framer-motion";

const About: React.FC = () => {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.45 }}
      >
         <Head>
            <title>Camelia Barnd - About us</title>
            <meta
               name="viewport"
               content="initial-scale=1.0, width=device-width, maximum-scale=1"
            />
         </Head>
         <s.ABoutContentMain>
            <s.AboutContainer>
               <s.Name>GIỚI THIỆU</s.Name>
               <s.Top>
                  <s.Title>Welcome to Camelia</s.Title>
                  <s.Des>
                     &quot;Camelia puts its heart and soul into every product,
                     giving people minimalism from the smallest things.&quot;
                  </s.Des>
               </s.Top>
               <s.Center>
                  <s.Des>
                     &emsp;&emsp;&nbsp;Chắc hẳn chúng ta đều đã và đang gặp phải
                     những rắc rối nhỏ nhặt trong cuộc sống hằng ngày từ việc
                     túi áo quần bị quá tải bởi nhiều vật dụng cho tới việc chìa
                     khóa, tai nghe điện thoại bị thất lạc trong chính chiếc
                     balo, túi xách mà chúng ta bỏ vào một cách lộn xộn. Nhưng
                     rồi chúng ta dần cho đó là thói quen và sống chung với
                     những vấn đề &quot;nhỏ nhặt&quot; này...
                  </s.Des>
                  <s.Des>
                     &emsp;&emsp;&nbsp;Với thông điệp &quot;More than
                     Simplicity&quot;, Camelia dành trọn tâm huyết để làm ra các
                     sản phẩm của mình. Không chỉ là sự đơn giản ở thiết kế bên
                     ngoài giúp cho người dùng đỡ mất thời gian suy nghĩ đến
                     việc lựa chọn quần áo phù hợp, mà thiết kế bên trong của
                     mỗi sản phẩm đều được chăm chút, tinh gọn nhằm tạo ra sự
                     tiện lợi và ngăn nắp cho người sử dụng.
                  </s.Des>
                  <s.Des>
                     &emsp;&emsp;&nbsp;Hãy trải nghiệm và cảm nhận sự thay đổi
                     của bản thân bạn cùng với Camelia nhé!
                  </s.Des>
                  <s.ImageBox>
                     <Image
                        src="https://file.hstatic.net/1000365849/file/ll_9e4d431b90a94b42b2b56f8aedd701fc_grande.jpg"
                        alt="Picture of the author"
                        width={600}
                        height={600}
                        layout="responsive"
                        placeholder="blur"
                        blurDataURL={
                           "https://file.hstatic.net/1000365849/file/ll_9e4d431b90a94b42b2b56f8aedd701fc_grande.jpg"
                        }
                     />
                  </s.ImageBox>
               </s.Center>
               <s.Bottom>
                  <s.Title>Have a good day!</s.Title>
               </s.Bottom>
            </s.AboutContainer>
         </s.ABoutContentMain>
      </motion.div>
   );
};

export default About;
