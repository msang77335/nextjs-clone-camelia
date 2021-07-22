import styled from "@emotion/styled";
import Container from "./StyleContainer";
import ContentMain from "./StyleContentMain";

export const ABoutContentMain = styled(ContentMain)`
   padding-top: 2rem;
`;

export const AboutContainer = styled(Container)``;

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

export const Title = styled.h4`
   margin-bottom: 2rem;
   font-weight: 700;
   @media (max-device-width: 1024px) {
      font-family: "FuturaBold";
      font-weight: 400;
   }
`;

export const ImageBox = styled.h4`
   margin: 0 auto;
   max-width: 60rem;
`;

export const Top = styled.div`
   text-align: center;
   margin-top: 3rem;
   ${Title} {
      font-size: 2.6rem;
   }
`;

export const Center = styled.div`
   border-top: 0.5px solid #000;
   border-bottom: 0.5px solid #000;
   margin: 3rem 0;
   padding: 2.5rem 0;
`;

export const Bottom = styled.div`
   text-align: center;
   padding-bottom: 4rem;
   ${Title} {
      font-size: 2rem;
   }
`;
