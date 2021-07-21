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

export const SearchBox = styled.div`
   position: relative;
   margin-top: 5rem;
`;

export const SearchForm = styled.form`
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 1rem 1.5rem;
   background-color: #f5f4f4;
   border-radius: 2px;
   position: relative;
   &::before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1.5rem;
      width: 100%;
      border-bottom: 1px dotted #c1c1c1;
   }
`;

export const Submit = styled.button`
   color: #c1c1c1;
   background-color: transparent;
   border: none;
`;

export const Result = styled.div`
   position: absolute;
   width: 100%;
`;

export const ResultList = styled.ul`
   margin-top: 0.5rem;
   background-color: #ffffff;
`;

export const ResultItem = styled.li`
   display: flex;
   align-items: center;
   padding: 1rem 0;
   border-bottom: 1px dotted #c1c1c1;
   transition: all 0.25s linear;
   &:hover {
      background-color: #f5f4f4;
   }
`;

export const SeeMore = styled.div`
   padding: 2rem;
   text-align: center;
   a {
      color: #d61c1f;
   }
`;

export const Image = styled.div`
   margin-right: 1rem;
`;

export const Info = styled.div`
   font-weight: 700;
   font-size: 1.2rem;
`;

export const Name = styled.p`
   margin-bottom: 0.7rem;
   text-transform: capitalize;
   color: #333333;
   @media (max-device-width: 1024px) {
      font-family: "FuturaBold";
      font-weight: 400;
   }
`;

export const Price = styled.p`
   color: #d61c1f;
   @media (max-device-width: 520px) {
      font-family: "FuturaBold";
      font-weight: 400;
   }
`;

export const Text = styled.p`
   margin-top: 0.5rem;
   padding: 1.5rem 1rem;
   color: #666666;
   border-radius: 3px;
   box-shadow: 0 1px 3px 0 #7d7d7d;
   background-color: #ffffff;
`;

export const PriceUnit = styled.span`
   text-decoration: underline;
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
