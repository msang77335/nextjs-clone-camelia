import styled from "@emotion/styled";
import Container from "./StyleContainer";
import ContentMain from "./StyleContentMain";

export const PaymentContentMain = styled(ContentMain)`
   padding-top: 2rem;
`;

export const PaymentContainer = styled(Container)``;

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
   color: #000000;
   font-size: 1.6rem;
`;

export const Image = styled.div`
   max-width: 43rem;
`;

export const Block = styled.div`
   margin: 4rem 0;
   ${Title} {
      font-size: 1.6rem;
      text-transform: initial;
      @media (max-device-width: 1024px) {
         font-family: "FuturaBold";
         font-weight: 400;
      }
   }
`;

export const Top = styled.div`
   margin: 3rem 0;
   ${Des} {
      font-size: 1.6rem;
   } ;
`;

export const Center = styled.div`
   border-top: 0.5px solid #000;
   border-bottom: 0.5px solid #000;
   padding: 2rem 0;
   ${Title} {
      color: #000000;
      font-size: 1.6rem;
      font-weight: 700;
   }
`;

export const Bottom = styled.div`
   padding: 3rem 0 5rem;
`;

export const Bold = styled.div`
   font-weight: 700;
`;
