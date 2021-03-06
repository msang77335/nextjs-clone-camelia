import styled from "@emotion/styled";

import { css } from "@emotion/react";

type DotProps = {
   isActive?: boolean;
};

type DotColorProps = {
   value?: string;
   disable?: boolean;
};

export const DotColor = styled.button`
   width: 2.7rem;
   height: 2.7rem;
   margin: 0.3rem;
   border-radius: 50%;
   display: inline-block;
   border: none;
   box-shadow: 0px 0px 0px 1px transparent;
   border: 2px solid rgb(237, 237, 237);
   transition: all 0.35s linear;
   background-color: ${(props: DotColorProps) => props.value};
   display: ${(props: DotColorProps) => (props.disable ? "none" : null)};
   @media (max-width: 1024px) {
      margin: 0.15rem;
   }
`;

export const Track = styled.ul`
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
`;

export const Dot = styled.li`
   ${(props: DotProps) =>
      props.isActive &&
      css`
         ${DotColor} {
            box-shadow: 0px 0px 0px 1px rgb(214, 28, 31);
         }
      `}
`;

export const Name = styled.p`
   margin: 1rem 0;
   text-transform: uppercase;
   text-align: center;
   line-height: 1.4;
   transition: all 0.25s linear;
   color: #333333;
   &:hover {
      color: rgb(214, 28, 31);
   }
   @media (max-width: 768px) {
      font-size: 1.2rem;
      line-height: 1;
   }
`;

export const ImageBox = styled.div`
   overflow: hidden;
   cursor: pointer;
   transition: all 0.25s ease;
`;

export const Content = styled.div`
   color: #333333;
   padding: 1rem;
   &:hover {
      ${ImageBox} {
         transform: scale(1.1);
      }
   }
`;

export const Price = styled.p`
   font-size: 1.3rem;
   font-weight: 700;
   color: #000;
   text-align: center;
   @media (max-width: 768px) {
      font-size: 1.2rem;
   }
   @media (max-device-width: 1024px) {
      font-family: "FuturaBold";
      font-weight: 400;
   }
`;

export const PriceUnit = styled.span`
   text-decoration: underline;
`;
