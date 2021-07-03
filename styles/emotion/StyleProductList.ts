import styled from "@emotion/styled";

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
   @media (max-width: 550px) {
      width: calc(50% - 3rem);
   }
`;
