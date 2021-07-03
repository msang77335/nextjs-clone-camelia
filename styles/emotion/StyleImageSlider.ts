import styled from "@emotion/styled";
import Wrapper from "./StyleWrapper";
import { css } from "@emotion/react";

type DotProps = {
   isActive?: boolean;
};

export const Arrow = styled.button`
   position: absolute;
   top: 50%;
   transform: translate(-50%, -50%);
   z-index: 1;
   border: none;
   padding: 0;
   background-color: transparent;
   img {
      opacity: 0;
      transition: all 0.25s linear;
      visibility: hidden;
   }
   &::before {
      display: none;
   }
`;

export const NextArrow = styled(Arrow)`
   right: 7rem;
   @media (max-width: 520px) {
      display: none;
   }
`;

export const PrevArrow = styled(Arrow)`
   left: 7rem;
   @media (max-width: 520px) {
      display: none;
   }
`;

export const ImageSliderWrapper = styled(Wrapper)`
   background-color: #ededed;
   &:hover {
      ${NextArrow},
      ${PrevArrow} {
         img {
            opacity: 1;
            visibility: visible;
         }
      }
   }
`;

export const Dots = styled.div`
   position: absolute;
   bottom: 1.5rem;
   left: 50%;
   transform: translate(-50%);
`;

export const DotList = styled.ul`
   display: flex;
`;

export const DotItem = styled.li`
   button {
      position: relative;
      background-color: transparent;
      border: none;
      padding: 0.5rem;
      border-radius: 50%;
      background-color: transparent;
      font-size: 0;
      margin: 0 0.5rem;
      &::before {
         position: absolute;
         top: 0;
         left: 0;
         z-index: -1;
         content: "";
         width: 1rem;
         height: 1rem;
         border-radius: 50%;
         background-color: #666666;
         opacity: 1;
         color: transparent;
         transition: all 0.25s linear;
      }
   }
   &:hover {
      button {
         &::before {
            background-color: #d61c1f;
         }
      }
   }
   ${(props: DotProps) =>
      props.isActive &&
      css`
         button {
            &::before {
               background-color: #d61c1f;
            }
         }
      `}
`;
