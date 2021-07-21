import styled from "@emotion/styled";
import Container from "./StyleContainer";
import ContentMain from "./StyleContentMain";

export const ProductsPageContentMain = styled(ContentMain)``;

export const ProductsPageContainer = styled(Container)`
   position: sticky;
   display: flex;
   flex-wrap: wrap;
`;

export const Tabs = styled.div``;

export const Left = styled.div`
   width: 65%;
   padding-right: 3rem;
   @media (max-width: 1280px) {
      padding-right: 1.5rem;
   }
   @media (max-width: 876px) {
      width: 100%;
      padding-right: 0;
      ${Tabs} {
         display: none;
      }
   }
`;

export const Right = styled.div`
   color: #333333;
   width: 35%;
   padding-left: 3rem;
   @media (max-width: 1280px) {
      padding-left: 1.5rem;
   }
   @media (max-width: 876px) {
      width: 100%;
      padding-left: 0;
   }
   @media (max-width: 768px) {
      margin-top: -3rem;
   }
`;

export const RightBox = styled.div`
   position: sticky;
   top: 53px;
   ${Tabs} {
      display: none;
   }
   @media (max-width: 876px) {
      position: relative;
      ${Tabs} {
         display: block;
      }
   }
`;

export const Name = styled.p`
   position: relative;
   font-size: 2.7rem;
   text-transform: uppercase;
   padding: 1.5rem;
   &:before {
      content: "";
      width: 100%;
      border: 1px solid #404040;
      position: absolute;
      left: 0;
      bottom: 0;
   }
   @media (max-width: 876px) {
      padding-left: 0;
   }
`;

export const Price = styled.p`
   color: #d61c1f;
   font-size: 2rem;
   padding: 2.5rem 1.5rem;
   font-weight: 700;
   @media (max-device-width: 1024px) {
      font-family: "FuturaBold";
      font-weight: 400;
   }
   @media (max-width: 876px) {
      padding-left: 0;
   }
`;

export const PriceUnit = styled.span`
   text-decoration: underline;
`;

export const Info = styled.p`
   line-height: 1.6;
`;

export const InfoList = styled.ul`
   padding: 2rem 1rem;
`;

export const InfoItem = styled.li`
   line-height: 1.6;
   margin: 0.5rem 0;
   ::before {
      content: "\\2022";
      color: rgb(102, 102, 102);
      display: inline-block;
      width: 1.5rem;
      margin-left: -1em;
   }
`;
