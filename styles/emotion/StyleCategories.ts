import styled from "@emotion/styled";
import Container from "./StyleContainer";
import Wrapper from "./StyleWrapper";

export const CategoriesWrapper = styled(Wrapper)`
   padding: 0.5rem;
   border: 1px solid #ccc;
`;

export const CategoriesContainer = styled(Container)``;

export const Name = styled.p`
   transition: all 0.15s linear;
   text-align: center;
   color: #333333;
   line-height: 1.6;
`;

export const ImageBox = styled.div`
   position: relative;
   display: inline-block;
`;

export const Image = styled.img`
   width: 6rem;
   height: 6rem;
   transition: all 0.25s linear;
`;

export const ImageHover = styled(Image)`
   position: absolute;
   top: 0;
   left: 0;
   opacity: 0;
`;

export const ImageNotHover = styled(Image)``;

export const List = styled.ul`
   display: flex;
   align-items: center;
   justify-content: center;
   @media (max-width: 650px) {
      flex-wrap: wrap;
   }
`;

export const Item = styled.li`
   padding: 0 0.3rem;
   width: 20rem;
   text-align: center;
   border-right: 1px solid #eee;
   &:first-of-type {
      ${ImageHover},
      ${ImageNotHover} {
         width: 4rem;
      }
   }
   &:last-of-type {
      border-right-color: transparent;
   }
   &:hover {
      ${ImageHover} {
         opacity: 1;
      }
      ${ImageNotHover} {
         opacity: 0;
      }
      ${Name} {
         color: rgb(214, 28, 31);
      }
   }
   @media (max-width: 650px) {
      padding: 1rem 0;
      border-bottom: 1px solid #eee;
      &:nth-of-type(2) {
         border-right-color: transparent;
      }
      &:nth-of-type(3),
      &:nth-of-type(4) {
         border-bottom-color: transparent;
      }
   }
`;
