import styled from "@emotion/styled";
import Container from "./StyleContainer";
import { Phone, Envelope, Search, Bars } from "@emotion-icons/fa-solid";
import { Registered } from "@emotion-icons/fa-regular";

export const HeaderContainer = styled(Container)`
   display: flex;
   justify-content: space-between;
   align-items: center;
   @media (max-device-width: 520px) {
      padding: 0.7rem 1.5rem;
   }
`;

export const Link = styled.span`
   color: #333333;
   transition: all 0.25s linear;
   outline: none;
   display: flex;
   align-items: center;
   &:hover {
      color: rgb(214, 28, 31);
   }
`;

export const SearchIcon = styled(Search)`
   width: 2rem;
   height: 2rem;
   color: #7b7979;
`;

export const BarsIcon = styled(Bars)`
   width: 2rem;
   height: 2rem;
   color: #7b7979;
`;

export const RegisteredIcon = styled(Registered)`
   color: #000000;
   margin-left: 0.5rem;
   width: 1.1rem;
   height: 1.1rem;
`;

export const EnvelopeIcon = styled(Envelope)`
   color: rgb(214, 28, 31);
   transition: all 0.25s linear;
   margin-right: 0.5rem;
   width: 1.4rem;
   height: 1.4rem;
`;

export const PhoneIcon = styled(Phone)`
   color: rgb(214, 28, 31);
   transition: all 0.25s linear;
   margin-right: 0.5rem;
   width: 1.4rem;
   height: 1.4rem;
   @media (max-width: 520px) {
      width: 2rem;
      height: 2rem;
      color: #7b7979;
   }
`;

export const EmailLink = styled(Link)`
   margin-right: 1.5rem;
`;

export const PhoneLink = styled(Link)``;

export const Top = styled.div`
   background-color: rgb(245, 245, 245);
   border-bottom: 1px solid #f0ebeb;
   padding: 0.5rem 0;
   position: sticky;
   top: 0;
   z-index: 99;
`;

export const Bottom = styled.div`
   padding: 1rem 0;
   display: none;
   @media (max-width: 860px) {
      display: block;
   }
   @media (max-width: 520px) {
      display: none;
   }
`;

export const Btn = styled.button`
   display: none;
   border: none;
   background-color: transparent;
   padding: 0;
   margin-right: 1rem;
   @media (max-width: 520px) {
      display: block;
   }
`;

export const Left = styled.div`
   @media (max-width: 520px) {
      display: flex;
      ${Link} {
         display: none;
      }
   }
`;

export const Right = styled.div`
   display: flex;
   align-items: center;
   ${Link} {
      margin-right: 2rem;
   }
   ${PhoneLink} {
      color: #333333;
      display: none;
      .icon {
         font-size: 2rem;
         color: #7b7979;
      }
   }
   @media (max-width: 860px) {
      ${Link} {
         margin-right: 1rem;
      }
      ${EmailLink} {
         display: none;
      }
   }
   @media (max-width: 520px) {
      ${Link} {
         display: none;
      }
      ${PhoneLink} {
         display: block;
      }
   }
`;

export const SearchBox = styled.div`
   @media (max-width: 860px) {
      display: none;
   }
`;

export const Logo = styled.img`
   width: 8rem;
   height: 3rem;
   display: none;
   @media (max-width: 520px) {
      display: block;
   }
`;

export const Cart = styled.button`
   position: relative;
   margin-left: 1.5rem;
   padding: 0;
   width: 3.2rem;
   height: 3.2rem;
   border: none;
   background-color: transparent;
   @media (max-width: 860px) {
      margin: 0;
   }
   @media (max-width: 520px) {
      width: 2.5rem;
      height: 2.5rem;
   }
`;
export const Quantity = styled.div`
   position: absolute;
   top: -0.4rem;
   right: -0.9rem;
   width: 1.7rem;
   height: 1.7rem;
   background-color: rgb(214, 28, 31);
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
`;
export const QuantityValue = styled.p`
   color: #ffff;
   font-size: 1rem;
`;
