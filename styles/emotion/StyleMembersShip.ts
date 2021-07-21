import styled from "@emotion/styled";
import Container from "./StyleContainer";
import ContentMain from "./StyleContentMain";

export const MembersShipContentMain = styled(ContentMain)``;

export const MembersShipContainer = styled(Container)`
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

export const Title = styled.p`
   color: #000000;
   font-size: 2rem;
`;

export const ImageBox = styled.div`
   margin: 3rem 0;
   max-width: 123rem;
`;

export const Block = styled.div`
   margin: 6rem 0;
   ${Title} {
      font-size: 1.6rem;
      text-transform: initial;
   }
`;

export const Bottom = styled.div`
   border-top: 0.5px solid #000;
   ${Block} {
      margin-top: 3rem;
   }
`;

export const Bold = styled.span`
   font-weight: 700;
   @media (max-device-width: 1024px) {
      font-family: "FuturaBold";
      font-weight: 400;
   }
`;

export const PrimaryColor = styled.span`
   color: #c0392b;
`;

export const RedColor = styled.span`
   color: rgb(255, 0, 0);
`;

export const Italic = styled.span`
   font-style: italic;
`;

export const Underline = styled.span`
   text-decoration: underline;
`;
