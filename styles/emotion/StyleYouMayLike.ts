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
   flex-wrap: wrap;
   overflow: hidden;
`;

export const Item = styled.li`
   width: calc(20% - 1rem);
   margin-right: 1rem;
   @media (max-width: 768px) {
      width: calc(33.33% - 1rem);
   }
   @media (max-width: 550px) {
      width: calc(50% - 1rem);
   }
`;
