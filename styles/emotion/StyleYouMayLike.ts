import styled from "@emotion/styled";
import Container from "./StyleContainer";

export const YouMayLikeContainer = styled(Container)`
   padding: 4rem 0 2rem;
`;

export const Top = styled.div`
   text-align: center;
`;

export const Title = styled.h2`
   text-transform: uppercase;
   font-size: 3rem;
   position: relative;
   display: inline-block;
   padding: 2rem;
   &:before {
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      width: 100%;
      height: 2px;
      background-color: #000000;
   }
`;

export const List = styled.ul`
   display: flex;
   margin-right: -1.5rem;
`;

export const Item = styled.li`
   width: calc(20% - 1.5rem);
   margin-right: 1.5rem;
   @media (max-width: 1160px) {
      width: calc(25% - 1.5rem);
   }
   @media (max-width: 860px) {
      width: calc(33.33% - 1.5rem);
   }
   @media (max-width: 768px) {
      width: calc(50% - 1.5rem);
   }
`;
