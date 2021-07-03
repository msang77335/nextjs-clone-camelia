import React from "react";
import Link from "next/link";
import * as s from "../styles/emotion/StyleFooter";
import {
   faFacebookF,
   faYoutube,
   faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SendMail from "./SendMail";

const Footer: React.FC = () => {
   return (
      <s.FooterWrapper>
         <s.FooterContainer>
            <s.Col>
               <s.LeftCenter>
                  <Link href="/">
                     <a>
                        <s.Title as="h3">CAMELIA BRAND</s.Title>
                     </a>
                  </Link>
                  <s.List>
                     <s.Item>
                        <Link href="/address">
                           <a>
                              <s.Link>
                                 <s.MapMarkerAltIcon />
                                 HCM: 633 Nguyễn Đình Chiểu, P.2, Q.3.
                              </s.Link>
                           </a>
                        </Link>
                     </s.Item>
                     <s.Item>
                        <Link href="/address">
                           <a>
                              <s.Link>
                                 <s.MapMarkerAltIcon />
                                 HCM: 174 Quang Trung, P.10, Gò Vấp.
                              </s.Link>
                           </a>
                        </Link>
                     </s.Item>
                     <s.Item>
                        <Link href="/">
                           <a>
                              <s.Link>
                                 <s.PhoneIcon />
                                 0909140170
                              </s.Link>
                           </a>
                        </Link>
                     </s.Item>
                     <s.Item>
                        <Link href="/">
                           <a>
                              <s.Link>
                                 <s.EnvelopeIcon />
                                 thecameliavn@gmail.com
                              </s.Link>
                           </a>
                        </Link>
                     </s.Item>
                  </s.List>
               </s.LeftCenter>
            </s.Col>
            <s.Col>
               <s.Center>
                  <s.Title as="h3">ĐĂNG KÝ NHẬN TIN</s.Title>
                  <SendMail />
                  <p>Cập nhật những sản phẩm mới nhất từ Camelia Brand nhé!</p>
                  <s.Media>
                     <s.MediaItem>
                        <Link href="/">
                           <a>
                              <s.FaceBookMedia>
                                 <FontAwesomeIcon icon={faFacebookF} />
                              </s.FaceBookMedia>
                           </a>
                        </Link>
                     </s.MediaItem>
                     <s.MediaItem>
                        <Link href="/">
                           <a>
                              <s.InstagramMedia>
                                 <FontAwesomeIcon icon={faInstagram} />
                              </s.InstagramMedia>
                           </a>
                        </Link>
                     </s.MediaItem>
                     <s.MediaItem>
                        <Link href="/">
                           <a>
                              <s.YouTuBeMedia>
                                 <FontAwesomeIcon icon={faYoutube} />
                              </s.YouTuBeMedia>
                           </a>
                        </Link>
                     </s.MediaItem>
                  </s.Media>
               </s.Center>
            </s.Col>
            <s.Col>
               <s.RightCenter>
                  <s.Title as="h3">BẠN NÊN XEM</s.Title>
                  <s.List>
                     <s.Item>
                        <Link href="/about-us">
                           <a>
                              <s.Link>Giới thiệu</s.Link>
                           </a>
                        </Link>
                     </s.Item>
                     <s.Item>
                        <Link href="/phuong-thuc-giao-hang">
                           <a>
                              <s.Link>Phương thức giao hàng</s.Link>
                           </a>
                        </Link>
                     </s.Item>
                     <s.Item>
                        <Link href="/phuong-thuc-thanh-toan">
                           <a>
                              <s.Link>Phương thức thanh toán</s.Link>
                           </a>
                        </Link>
                     </s.Item>
                     <s.Item>
                        <Link href="/chinh-sach-bao-hanh">
                           <a>
                              <s.Link>Chính sách bảo hành</s.Link>
                           </a>
                        </Link>
                     </s.Item>
                     <s.Item>
                        <Link href="/chinh-sach-doi-tra">
                           <a>
                              <s.Link>Chính sách đổi trả</s.Link>
                           </a>
                        </Link>
                     </s.Item>
                     <s.Item>
                        <Link href="/chinh-sach-bao-mat">
                           <a>
                              <s.Link>Chính sách bảo mật</s.Link>
                           </a>
                        </Link>
                     </s.Item>
                  </s.List>
               </s.RightCenter>
            </s.Col>
         </s.FooterContainer>
         <s.Bottom>
            <p>
               Copyrights © 2020 by
               <Link href="/">
                  <a>
                     <s.Link> Camelia Brand</s.Link>
                  </a>
               </Link>
            </p>
         </s.Bottom>
      </s.FooterWrapper>
   );
};

export default Footer;
