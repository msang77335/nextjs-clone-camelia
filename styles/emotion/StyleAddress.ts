import styled from "@emotion/styled";
import Container from "./StyleContainer";
import ContentMain from "./StyleContentMain";

export const AddressContentMain = styled(ContentMain)``;

export const AddressContainer = styled(Container)`
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
`;

export const Title = styled.h4`
   color: #000000;
   font-size: 1.6rem;
`;

export const ImageBox = styled.div`
   margin-bottom: 2rem;
   max-width: 123rem;
`;

export const List = styled.ul``;

export const Item = styled.li`
   color: #000000;
   font-size: 1.6rem;
   margin: 0.7rem 0;
   margin-left: 2rem;
   ::before {
      content: "\\2022";
      color: #666666;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
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
   padding: 3rem 0 5rem;
`;

export const Bold = styled.div`
   font-weight: 700;
`;

export const PrimaryColor = styled.div`
   color: #c0392b;
`;

export const Italic = styled.div`
   font-style: italic;
`;

export const Underline = styled.div`
   text-decoration: underline;
`;
