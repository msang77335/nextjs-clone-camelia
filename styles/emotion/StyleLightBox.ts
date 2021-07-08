import styled from "@emotion/styled";
import { css, keyframes } from "@emotion/react";

type PropsLightBox = {
   isOpen?: boolean;
   isAutoPlay?: boolean;
   isDotActive?: boolean;
   isOpenThumnails?: boolean;
   isActiveThumnail?: boolean;
};

import {
   Times,
   ArrowLeft,
   ArrowRight,
   Expand,
   Compress,
   Play,
   Th,
   Pause,
} from "@emotion-icons/fa-solid";

export const Options = styled.div`
   position: fixed;
   top: 0;
   right: 0;
   display: flex;
   z-index: 100;
   transition: all 0.25s linear;
`;

export const Option = styled.button`
   width: 4.5rem;
   height: 4.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: rgba(30, 30, 30, 0.6);
   border: none;
   transition: all 0.25s linear;
   &:hover {
      background-color: rgba(0, 0, 0, 1);
   }
`;

export const OptionThumnails = styled(Option)`
   @media (max-width: 768px) {
      display: none;
   }
`;

export const Arrow = styled.button`
   position: fixed;
   top: 50%;
   transform: translateY(-50%);
   padding: 1rem;
   background-color: rgba(30, 30, 30, 0.6);
   border: none;
   transition: all 0.25s linear;
   &:hover {
      background-color: rgba(0, 0, 0, 1);
   }
   z-index: 1;
   @media (max-width: 550px) {
      display: none;
   }
`;

export const NextArrow = styled(Arrow)`
   right: 1rem;
`;
export const PrevArrow = styled(Arrow)`
   left: 1rem;
`;

export const ThIcon = styled(Th)`
   width: 1.5rem;
   height: 1.5rem;
   color: #cacaca;
`;

export const PlayIcon = styled(Play)`
   width: 1.5rem;
   height: 1.5rem;
   color: #cacaca;
`;

export const PauseIcon = styled(Pause)`
   width: 1.5rem;
   height: 1.5rem;
   color: #cacaca;
`;

export const NextIcon = styled(ArrowRight)`
   width: 2rem;
   height: 2rem;
   color: #cacaca;
`;

export const PrevIcon = styled(ArrowLeft)`
   width: 2rem;
   height: 2rem;
   color: #cacaca;
`;

export const ExpandIcon = styled(Expand)`
   width: 2rem;
   height: 2rem;
   color: #cacaca;
`;

export const CompressIcon = styled(Compress)`
   width: 2rem;
   height: 2rem;
   color: #cacaca;
`;

export const TimesIcon = styled(Times)`
   width: 2rem;
   height: 2rem;
   color: #cacaca;
`;

export const Content = styled.div`
   transition: all 0.25s ease-in-out;
`;

export const SliderItem = styled.div`
   position: relative;
   width: 100vw;
   height: 100vh;
   transition: all 0.25s ease-in-out;
`;

export const ImageBox = styled.div`
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   z-index: 100;
   width: 50rem;
   @media (max-width: 550px) {
      width: 90%;
   }
   transition: all 0.25s ease-in-out;
   opacity: ${(props: PropsLightBox) => (props.isOpen ? 1 : 0)};
   transform: ${(props: PropsLightBox) =>
      props.isOpen
         ? "translate(-50%, -50%) scale(1)"
         : "translate(-50%, -50%) scale(0.7)"};
`;

const progressAnimation = keyframes`
   from {width: 0%}
   to {width:100%}
`;

export const Progress = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 2px;
   z-index: 100;
   background-color: rgba(0, 0, 0, 0.1);
   &:before {
      position: absolute;
      content: "";
      height: 100%;
      background-color: #d61c1f;
      box-shadow: 0 0 10px #d61c1f, 0 0 5px #d61c1f !important;
   }
   ${(props: PropsLightBox) =>
      props.isAutoPlay &&
      css`
         &:before {
            animation: ${progressAnimation} 2s ease infinite;
         }
      `};
`;

export const Track = styled.div`
   position: fixed;
   width: 20rem;
   height: 100vh;
   background-color: #fff;
   right: -20rem;
   transition: all 0.25s ease-in-out;
   top: 0;
`;

export const Dots = styled.ul`
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
`;

export const Dot = styled.li`
   position: relative;
   cursor: pointer;
   width: 9.7rem;
   height: 9.7rem;
   margin-bottom: 0.6rem;
   border: none;
   &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: calc(100% - 8px);
      height: calc(100% - 8px);
      border: 4px solid transparent;
      border-radius: 2px;
   }
   ${(props: PropsLightBox) =>
      props.isDotActive &&
      css`
         &:before {
            border-color: #d61c1f;
            z-index: 1;
         }
      `};
`;

export const Wrapper = styled.div`
   position: fixed;
   z-index: 200;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.7);
   transition: all 0.25s linear;
   opacity: ${(props: PropsLightBox) => (props.isOpen ? 1 : 0)};
   visibility: ${(props: PropsLightBox) =>
      props.isOpen ? "visible" : "hidden"};
   ${(props: PropsLightBox) =>
      props.isOpenThumnails &&
      css`
         ${Options} {
            right: 20rem;
         }
         ${Track} {
            right: 0;
         }
         ${NextArrow} {
            right: 21rem;
         }
         ${ImageBox} {
            left: calc(50% - 10rem);
         }
         ${Progress} {
            width: calc(100% - 20rem);
         }
      `};
`;
