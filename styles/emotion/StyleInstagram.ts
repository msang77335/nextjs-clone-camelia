import styled from "@emotion/styled";
import Container from "./StyleContainer";

export const InstagramContainer = styled(Container)`
   padding-top: 2rem;
`;

export const Title = styled.p`
   text-align: center;
   font-size: 3.4rem;
   margin: 3rem 0;
   color: #333333;
`;

export const List = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`;

export const Item = styled.li`
   width: calc(25% - 0.75rem);
   &:nth-of-type(1),
   &:nth-of-type(2) {
      display: none;
   }
   @media (max-width: 520px) {
      &:nth-of-type(1),
      &:nth-of-type(2) {
         display: block;
      }
      width: calc(33.33% - 0.5rem);
      &:nth-of-type(1),
      &:nth-of-type(2) {
         margin-bottom: 0.66rem;
      }
   }
`;
