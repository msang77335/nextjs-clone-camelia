import React from "react";
import Link from "next/link";
import Image from "next/image";
import * as s from "../styles/emotion/StyleInstagram";
const Instagram: React.FC = () => {
   return (
      <s.InstagramContainer>
         <s.Title as="h2">Instagram</s.Title>
         <Link href="/">
            <a>
               <s.List>
                  <s.Item>
                     <Image
                        src="https://theme.hstatic.net/1000365849/1000616074/14/img_instagram1.jpg?v=81"
                        width={1000}
                        height={1000}
                        layout="responsive"
                     />
                  </s.Item>
                  <s.Item>
                     <Image
                        src="https://theme.hstatic.net/1000365849/1000616074/14/img_instagram2.jpg?v=81"
                        width={1000}
                        height={1000}
                        layout="responsive"
                     />
                  </s.Item>
                  <s.Item>
                     <Image
                        src="https://theme.hstatic.net/1000365849/1000614631/14/img_instagram1.jpg?v=81"
                        width={1000}
                        height={1000}
                        layout="responsive"
                     />
                  </s.Item>
                  <s.Item>
                     <Image
                        src="https://theme.hstatic.net/1000365849/1000614631/14/img_instagram2.jpg?v=81"
                        width={1000}
                        height={1000}
                        layout="responsive"
                     />
                  </s.Item>
                  <s.Item>
                     <Image
                        src="https://theme.hstatic.net/1000365849/1000614631/14/img_instagram3.jpg?v=81"
                        width={1000}
                        height={1000}
                        layout="responsive"
                     />
                  </s.Item>
                  <s.Item>
                     <Image
                        src="https://theme.hstatic.net/1000365849/1000614631/14/img_instagram4.jpg?v=81"
                        width={1000}
                        height={1000}
                        layout="responsive"
                     />
                  </s.Item>
               </s.List>
            </a>
         </Link>
      </s.InstagramContainer>
   );
};

export default Instagram;
