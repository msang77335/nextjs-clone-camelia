import styled from "@emotion/styled";
import { ChevronLeft, ChevronRight } from "@emotion-icons/fa-solid";
import { css } from "@emotion/react";

type DotProps = {
   isActive?: boolean;
};

export const LightBox = styled.div`
   display: none;
`;

export const NextArrow = styled(ChevronRight)`
   right: 2rem;
   @media (max-width: 430px) {
      right: 0;
   }
`;

export const PrevArrow = styled(ChevronLeft)`
   left: 2rem;
   @media (max-width: 430px) {
      left: 0;
   }
`;

export const Track = styled.ul`
   display: flex;
   justify-content: center;
`;

export const DotImage = styled.button`
   position: relative;
   width: 8.5rem;
   height: 8.5rem;
   margin: 0 1rem;
   background-color: transparent;
   border: 2px solid transparent;
   overflow: hidden;
   @media (max-width: 1280px) {
      margin: 0 0.5rem;
   }
   @media (max-width: 1080px) {
      width: 7rem;
      height: 7rem;
   }
   @media (max-width: 600px) {
      width: 5rem;
      height: 5rem;
   }
   @media (max-width: 430px) {
      width: 4rem;
      height: 4rem;
   }
`;

export const Dot = styled.li`
   ${(props: DotProps) =>
      props.isActive &&
      css`
         ${DotImage} {
            border-color: #d61c1f;
            img {
               transform: scale(1);
            }
         }
      `}
`;

export const SliderContainer = styled.div`
   text-align: center;
   ${PrevArrow},
   ${NextArrow} {
      cursor: pointer;
      position: absolute;
      width: 3rem;
      height: 3rem;
      top: 45%;
      z-index: 10;
   }
`;

export const ImageBox = styled.div`
   max-width: 80%;
   cursor: pointer;
   margin: 7rem 0;
`;
