import styled from "@emotion/styled";
import Container from "./StyleContainer";

export const CollectionsContainer = styled(Container)`
   padding-bottom: 3rem;
`;

export const Name = styled.p`
   text-transform: uppercase;
   font-size: 2.3rem;
   color: #333333;
   @media (max-width: 414px) {
      margin-bottom: 1rem;
   }
`;

export const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   @media (max-width: 414px) {
      flex-direction: column;
      align-items: flex-start;
   }
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
   @media (max-width: 860px) {
      width: calc(33.33% - 1rem);
   }
   @media (max-width: 768px) {
      width: calc(50% - 1rem);
   }
`;
