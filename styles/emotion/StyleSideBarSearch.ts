import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Search } from "@emotion-icons/fa-solid";

type SideBarProps = {
   isOpen?: Boolean;
};


export const SearchIcon = styled(Search)`
   color: #c1c1c1;
   width: 1.7rem;
   height: 1.7rem;
`;

export const Input = styled.input`
   border: none;
   background-color: #f5f4f4;
   font-family: "Futura", sans-serif;
   color: #000000;
   width: 90%;
   &::placeholder {
      font-family: "Futura", sans-serif;
      color: #c1c1c1;
   }
`;

export const Content = styled.div`
   width: 30rem;
   height: 100vh;
   padding: 4rem 2rem;
   position: fixed;
   z-index: 200;
   top: 0;
   background-color: #ffffff;
   transition: all 0.25s ease-in-out;
   display: none;
   @media (max-width: 520px) {
      display: block;
   }
`;

export const Top = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`;

export const Label = styled.p`
   text-transform: uppercase;
   color: #555555;
`;

export const SearchBox = styled.form`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1.5rem;
   margin-top: 5rem;
   background-color: #f5f4f4;
   border-radius: 2px;
   position: relative;
   &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2rem;
      width: 100%;
      border-bottom: 1px dotted #c1c1c1;
   }
`;

export const Submit = styled.button`
   color: #c1c1c1;
   background-color: transparent;
   border: none;
`;

export const BtnClose = styled.button`
   position: relative;
   width: 3rem;
   height: 3rem;
   border: none;
   background-color: transparent;
   &::after,
   &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 0.05rem;
      background-color: #333333;
   }
   &::after {
      transform: translateY(-50%) rotate(45deg);
   }
   &::before {
      transform: translateY(-50%) rotate(-45deg);
   }
`;

export const BackGroud = styled.div`
   position: fixed;
   z-index: 100;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.2);
   transition: all 0.25s ease-in-out;
   display: none;
   @media (max-width: 520px) {
      display: block;
   }
`;

export const SideBar = styled.div`
   ${(props: SideBarProps) =>
      props.isOpen
         ? css`
              ${Content} {
                 left: 0rem;
              }
              ${BackGroud} {
                 opacity: 1;
                 visibility: visible;
              }
           `
         : css`
              ${Content} {
                 left: -30rem;
              }
              ${BackGroud} {
                 opacity: 0;
                 visibility: hidden;
              }
           `}
`;
