import styled from "@emotion/styled";
import Container from "./StyleContainer";

export const CollectionsContainer = styled(Container)`
   padding-bottom: 3rem;
`;

export const Name = styled.p`
   text-transform: uppercase;
   font-size: 2.3rem;
   color: #333333;
`;

export const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const Title = styled.p`
   white-space: nowrap;
   font-size: 3rem;
   color: #333333;
   text-transform: capitalize;
`;

export const Line = styled.div`
   margin-left: 2rem;
   width: 100%;
   height: 1px;
   background-color: #333333;
`;

export const List = styled.ul`
   display: flex;
   flex-wrap: wrap;
   margin-right: -3rem;
`;

export const Item = styled.li`
   width: calc(25% - 3rem);
   margin: 3rem 3rem 3rem 0;
   @media (max-width: 768px) {
      width: calc(33.33% - 3rem);
      margin: 1rem 3rem 1rem 0;
   }
   @media (max-width: 768px) {
      width: calc(50% - 3rem);
   }
`;
