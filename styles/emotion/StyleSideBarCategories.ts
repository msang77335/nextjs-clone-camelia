import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { Phone, Envelope, Times } from "@emotion-icons/fa-solid";
import { Registered } from "@emotion-icons/fa-regular";

type SideBarProps = {
   isOpen?: Boolean;
};

export const TimesIcon = styled(Times)`
   width: 1.7rem;
   height: 1.7rem;
`;

export const RegisteredIcon = styled(Registered)`
   color: #000000;
   margin-left: 0.5rem;
   width: 1.1rem;
   height: 1.1rem;
   transition: all 0.25s linear;
`;

export const EnvelopeIcon = styled(Envelope)`
   color: rgb(214, 28, 31);
   width: 1.2rem;
   height: 1.2rem;
`;

export const PhoneIcon = styled(Phone)`
   color: rgb(214, 28, 31);
   width: 1.2rem;
   height: 1.2rem;
`;

export const Content = styled.div`
   width: 30rem;
   height: 100vh;
   position: fixed;
   z-index: 200;
   top: 0;
   background-color: #ffffff;
   transition: all 0.25s ease-in-out;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
`;

export const BackGroud = styled.div`
   position: fixed;
   z-index: 100;
   top: 0;
   left: 0;
   width: 100vw;
   height: 100vh;
   background-color: rgba(0, 0, 0, 0.1);
   transition: all 0.25s ease-in-out;
`;

export const BtnClose = styled.button`
   background-color: #000000;
   width: 4.1rem;
   height: 4.1rem;
   display: flex;
   align-items: center;
   justify-content: center;
   position: fixed;
   top: 0;
   color: #ffffff;
   transition: all 0.25s ease-in-out;
   font-size: 1.6rem;
   z-index: 200;
   border: none;
`;

export const Link = styled.div`
   color: #000000;
   transition: all 0.25s linear;
   &:hover {
      color: rgb(214, 28, 31);
   }
`;

export const Logo = styled.div`
   padding: 1.22rem;
   background-color: #dcdbdb;
`;

export const Top = styled.div`
   ${Link} {
      display: flex;
      align-items: center;
      &:hover {
         ${RegisteredIcon} {
            color: rgb(214, 28, 31);
         }
      }
   }
`;

export const Bottom = styled.div`
   display: flex;
   border-top: 1px solid #dcdbdb;
   a {
      padding-top: 0.5rem;
      width: 50%;
      border-right: 1px solid #dcdbdb;
      &:last-of-type {
         border-color: transparent;
      }
   }
   ${Link} {
      text-align: center;
      padding: 0 0.5rem 0.5rem;
      font-size: 1.2rem;
      p {
         margin-top: 1rem;
      }
   }
`;

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

export const Categories = styled.ul`
   padding: 1rem 0;
   display: flex;
   flex-wrap: wrap;
`;

export const Category = styled.li`
   border-bottom: 1px solid #dcdbdb;
   border-right: 1px solid #dcdbdb;
   width: 50%;
   text-align: center;
   padding: 0.5rem;
   &:first-of-type {
      ${ImageHover},
      ${ImageNotHover} {
         width: 4rem;
      }
   }
   &:nth-of-type(2),
   &:nth-of-type(4) {
      border-right-color: transparent;
   }
   &:nth-of-type(3),
   &:nth-of-type(4) {
      border-bottom-color: transparent;
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
              ${BtnClose} {
                 left: 30rem;
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
              ${BtnClose} {
                 left: -60rem;
              }
           `}
`;
