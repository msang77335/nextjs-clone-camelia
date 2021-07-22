import styled from "@emotion/styled";
import { TrashAlt } from "@emotion-icons/fa-solid";

import Container from "./StyleContainer";

export const CartContainer = styled(Container)`
   padding: 4rem 3rem;
   @media (max-width: 430px) {
      padding: 3rem 1.5rem;
   }
`;

export const Name = styled.h2`
   text-transform: uppercase;
   font-size: 2.3rem;
   color: #333333;
   margin-bottom: 2rem;
`;

export const TrashIcon = styled(TrashAlt)`
   cursor: pointer;
   width: 3rem;
   height: 3rem;
   padding: 0.5rem;
   transition: all 0.25s linear;
   &:hover {
      color: #d61c1f;
   }
`;

export const Table = styled.table`
   width: 100%;
`;

export const Thead = styled.thead`
   @media (max-width: 768px) {
      display: none;
   }
`;

export const Tr = styled.tr`
   @media (max-width: 768px) {
      margin-bottom: 2rem;
      display: block;
      border-radius: 3px;
      box-shadow: 0px 0px 5px 3px rgb(0 0 0 / 20%);
      &:last-of-type {
         margin-bottom: 0;
      }
   }
   @media (max-device-width: 430px) {
      box-shadow: 0px 0px 5px 1px rgb(0 0 0 0.1);
   }
`;

export const Th = styled.th`
   text-transform: uppercase;
   font-weight: 700;
   text-align: left;
   padding: 1.5rem;
   font-size: 1.5rem;
   background-color: rgb(245, 245, 245);
   &:first-of-type {
      width: 40%;
   }
   &:last-of-type {
      text-align: center;
   }
   @media (max-device-width: 1024px) {
      font-family: "FuturaBold";
      font-weight: 400;
   }
   @media (max-width: 768px) {
      font-size: 1.4rem;
      &:first-of-type {
         width: 35%;
      }
   }
`;

export const Td = styled.td`
   padding: 1.5rem;
   font-weight: 700;
   border-radius: 3px;
   border-bottom: 1px solid #f0ebeb;
   vertical-align: middle;
   &:last-of-type {
      text-align: center;
   }
   @media (max-device-width: 1024px) {
      font-family: "FuturaBold";
      font-weight: 400;
   }
   @media (max-width: 768px) {
      display: flex;
      justify-content: flex-end;
      position: relative;
      width: 100%;
      &:before {
         content: attr(data-label);
         position: absolute;
         left: 2rem;
         top: 50%;
         transform: translateY(-50%);
         font-size: 1.5rem;
         text-transform: uppercase;
         @media (max-width: 414px) {
            font-size: 1.4rem;
         }
      }
   }
`;

export const Product = styled.div`
   display: flex;
   align-items: center;
   @media (max-width: 414px) {
      flex-direction: column;
   }
`;

export const ProductImage = styled.div`
   @media (max-width: 768px) {
      width: 7rem;
      height: 7rem;
   }
`;

export const ProductInfo = styled.div`
   margin-left: 1.5rem;
`;

export const ProductName = styled.p`
   font-size: 1.5rem;
   padding: 0.5rem 0;
   text-transform: capitalize;
   a {
      color: #000000;
      transition: all 0.25s linear;
   }
   &:hover {
      a {
         color: #d61c1f;
      }
   }
`;

export const ProductColor = styled.p`
   font-weight: 500;
   font-style: italic;
   color: #666666;
   span {
      text-transform: capitalize;
   }
   @media (max-width: 1024px) {
      font-style: initial;
   }
`;

export const ProductPrice = styled.p`
   color: #d61c1f;
`;

export const ProductQuantity = styled.div``;

export const ProductTotalPrice = styled.p`
   color: #d61c1f;
`;

export const PriceUnit = styled.span`
   text-decoration: underline;
`;

export const Bottom = styled.div`
   margin-top: 4rem;
`;

export const TotalPrice = styled.p`
   text-align: right;
   font-weight: 700;
   font-size: 1.9rem;
   margin-bottom: 1.5rem;
   color: #666666;
   @media (max-device-width: 1024px) {
      font-family: "FuturaBold";
      font-weight: 400;
   }
`;

export const Price = styled.span`
   color: #d61c1f;
`;

export const Actions = styled.div`
   display: flex;
   justify-content: flex-end;
`;

export const BtnAction = styled.button`
   width: 15rem;
   text-transform: uppercase;
   font-weight: 700;
   border-radius: 3px;
   border: none;
   font-size: 1.2rem;
   transition: all 0.25s linear;
   @media (max-device-width: 1024px) {
      font-family: "FuturaBold";
      font-weight: 400;
      width: 17rem;
      font-size: 1.3rem;
   }
`;

export const BtnApply = styled(BtnAction)`
   padding: 0.9rem;
   color: #ffffff;
   background-color: #545457;
   margin-right: 1rem;
   &:hover {
      background-color: #666666;
   }
`;

export const BtnPay = styled(BtnAction)`
   a {
      display: inline-block;
      padding: 0.8rem 3.05rem;
      color: #ffffff;
   }
   background-color: #d61c1f;
   &:hover {
      background-color: #e95658;
   }
`;

export const CartEmtpy = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   min-height: 28.5rem;
`;

export const Text = styled.p`
   color: #666666;
   margin-bottom: 2rem;
   font-size: 1.8rem;
   a {
      color: #d61c1f;
      position: relative;
      &:before {
         content: "";
         position: absolute;
         left: 2px;
         bottom: -1px;
         transition: all 0.25s linear;
         width: 0;
         height: 1.5px;
         background-color: #d61c1f;
      }
      &:hover {
         &:before {
            width: 100%;
         }
      }
   }
`;
