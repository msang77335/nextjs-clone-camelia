import styled from "@emotion/styled";
import Container from "./StyleContainer";
import ContentMain from "./StyleContentMain";

export const BlogContentMain = styled(ContentMain)``;

export const BlogContainer = styled(Container)`
   padding-top: 2rem;
`;

export const Name = styled.h2`
   text-transform: uppercase;
   font-size: 2.3rem;
   color: #333333;
`;

export const Des = styled.p`
   color: #000000;
   margin: 1.5rem 0;
   line-height: 1.45;
`;

export const Link = styled.div`
   text-align: center;
   margin: 3rem 0;
   a {
      color: #d61c1f;
      text-decoration: underline;
   }
`;

export const Title = styled.h4`
   color: #000000;
   font-size: 1.6rem;
`;

export const ImageBox = styled.div`
   margin-bottom: 2rem;
   max-width: 123rem;
`;

export const Block = styled.div`
   margin: 7rem 0;
   ${Title} {
      font-size: 1.6rem;
      color: #000000;
      font-weight: 700;
      @media (max-device-width: 1024px) {
         font-family: "FuturaBold";
         font-weight: 400;
      }
   }
`;

export const Top = styled.div`
   margin: 3rem 0;
`;

export const Center = styled.div`
   border-top: 0.5px solid #000;
   border-bottom: 0.5px solid #000;
   padding: 4rem 0;
   font-weight: 700;
   ${Des} {
      margin: 5rem 0;
   }
`;

export const Bottom = styled.div`
   text-align: center;
`;
