import styled from "@emotion/styled";
import Container from "./StyleContainer";
import { ChevronRight, ChevronLeft } from "@emotion-icons/fa-solid";
import { css } from "@emotion/react";

type PropsBreadcrumb = { isActice?: boolean };

type PropsRadioLabel = { isBorder?: boolean };

type PropsRadioItem = { isChose?: boolean };

export const ChevronRightIcon = styled(ChevronRight)`
   width: 1rem;
   height: 1rem;
   color: #999999;
   margin: 0 1rem;
`;

export const ChevronLeftIcon = styled(ChevronLeft)`
   width: 1rem;
   height: 1.3rem;
   color: #338dbc;
   transition: all 0.25s linear;
`;

export const CheckoutsContainer = styled(Container)`
   font-family: Arial, Helvetica, sans-serif;
   display: flex;
   height: 100%;
   padding: 0;
   @media (max-width: 1024px) {
      flex-direction: column-reverse;
   }
`;

export const Title = styled.h2`
   font-size: 2.8rem;
   a {
      color: #333333;
   }
`;

export const Left = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 55%;
   padding: 5rem 7rem 0;
   min-height: 100vh;
   overflow: hidden;
   @media (max-width: 1024px) {
      width: 100%;
      padding: 3rem 10rem 0;
      ${Title} {
         display: none;
      }
   }
   @media (max-width: 680px) {
      padding: 3rem 5rem 0;
   }
   @media (max-width: 500px) {
      padding: 3rem 2rem 0;
   }
`;

export const Breadcrumb = styled.ul`
   display: flex;
   margin: 2rem 0 3rem;
   @media (max-width: 1024px) {
      display: none;
   }
`;

export const BreadcrumbItem = styled.li`
   height: 1rem;
   display: flex;
   align-items: center;
   font-size: 1.2rem;
   p {
      color: #999999;
      span {
         cursor: default;
         color: #4d4d4d;
      }
   }
   a {
      color: #338dbc;
   }
   span {
      cursor: pointer;
      color: #338dbc;
   }
   ${(props: PropsBreadcrumb) =>
      props.isActice &&
      css`
         p {
            color: #333333;
         }
      `};
`;

export const FormTitle = styled.p`
   font-size: 1.8rem;
`;

export const Form = styled.form`
   margin-top: 1.5rem;
`;

export const FormRow = styled.div`
   margin-top: 1.5rem;
   width: 100%;
`;

export const FormBottom = styled.div`
   display: flex;
   justify-content: space-between;
   margin-top: 2.5rem;
`;

export const FormBottomBack = styled.div`
   display: flex;
   align-items: center;
   a {
      color: #338dbc;
      padding: 1rem 0.5rem;
   }
   p {
      cursor: pointer;
      color: #338dbc;
      padding: 1rem 0.5rem;
   }
   &:hover {
      ${ChevronLeftIcon} {
         transform: translateX(-5px);
      }
   }
`;

export const FlexRow = styled(FormRow)`
   display: flex;
   justify-content: space-between;
   flex-wrap: wrap;
`;

export const Email = styled.div`
   width: calc(66% - 0.5rem);
   display: inline-block;
   @media (max-width: 768px) {
      width: 100%;
      display: block;
   }
`;

export const Phone = styled.div`
   width: calc(34% - 0.5rem);
   display: inline-block;
   margin-left: 1rem;
   @media (max-width: 768px) {
      width: 100%;
      display: block;
      margin-left: 0;
      margin-top: 1.5rem;
   }
`;

export const Select = styled.div`
   width: calc(50% - 0.5rem);
   @media (max-width: 768px) {
      width: 100%;
   }
`;

export const SelectLeft = styled.div`
   width: calc(66% - 0.5rem);
   display: flex;
   justify-content: space-between;
   @media (max-width: 768px) {
      width: 100%;
      flex-wrap: wrap;
      ${Select} {
         margin-top: 1.5rem;
         &:first-of-type {
            margin-top: 0;
         }
      }
   }
`;

export const SelectRight = styled.div`
   width: calc(34% - 0.5rem);
   @media (max-width: 768px) {
      margin-top: 1.5rem;
      width: 100%;
   }
`;

export const Btn = styled.button`
   font-family: Arial, Helvetica, sans-serif;
   width: 10rem;
   height: 3.6rem;
   background-color: #338dbc;
   border: none;
   border-radius: 4px;
   color: #ffffff;
`;

export const TabInfo = styled.div``;

export const LeftTop = styled.div``;

export const LeftBottom = styled.p`
   margin-top: 2rem;
   text-align: center;
   padding: 1rem 0;
   border-top: 1px solid #e6e6e6;
   color: #bbb5b5;
   font-size: 0.65em;
`;

export const RadioGroup = styled.div`
   margin-bottom: 3rem;
`;

export const RadioTitle = styled.p`
   font-size: 1.8rem;
`;

export const RadioList = styled.ul`
   margin-top: 2rem;
   border-radius: 4px;
   box-shadow: 0 0 0 1px #d9d9d9;
`;

export const RadioLeft = styled.div`
   display: flex;
   align-items: center;
`;

export const RadioItemLabel = styled.div`
   padding: 2rem;
   display: flex;
   align-items: center;
   justify-content: space-between;
   color: #737373;
   border-bottom: ${(props: PropsRadioLabel) =>
      props.isBorder && "1px solid #e1e1e1"};
`;

export const RadioDesc = styled.div`
   display: none;
   text-align: center;
   padding: 4rem 3.5rem;
   background-color: #fafafa;
   color: #737373;
   span {
      display: block;
      margin: 2rem 0;
   }
`;

export const Radio = styled.div`
   width: 2rem;
   height: 2rem;
   border-radius: 50%;
   margin-right: 1rem;
   position: relative;
   border: 1px solid #c4c2c2;
   transition: all 0.25s linear;
   background-color: #338dbc;
   &:after {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
      content: "";
      position: absolute;
      width: 2rem;
      height: 2rem;
      border: 1px solid #c4c2c2;
      border-radius: 50%;
      background-color: #ffffff;
      transition: all 0.15s ease-in-out;
   }
`;

export const RadioItem = styled.li`
   cursor: pointer;
   ${(props: PropsRadioItem) =>
      props.isChose &&
      css`
         ${Radio} {
            &:after {
               transform: translate(-50%, -50%) scale(0.3);
            }
         }
         ${RadioDesc} {
            display: block;
         }
      `};
`;

export const Right = styled.div`
   width: 45%;
   box-shadow: 1px 0 0 #e1e1e1 inset;
   @media (max-width: 1024px) {
      width: 100%;
   }
`;

export const RightTop = styled.div`
   background-color: #ffffff;
   padding: 2rem 10rem;
   display: none;
   @media (max-width: 1024px) {
      display: block;
   }
   @media (max-width: 680px) {
      padding: 2rem 5rem;
   }
   @media (max-width: 500px) {
      padding: 2rem 2rem;
   }
`;

export const RightCenter = styled.div`
   padding: 5rem 7rem 0;
   background-color: #f5f5f5;
   height: 100%;
   border-left: 1px solid #d2d2d2;
   @media (max-width: 1024px) {
      width: 100%;
      padding: 3rem 10rem 2rem;
      border-bottom: 1px solid #d2d2d2;
      border-top: 1px solid #d2d2d2;
   }
   @media (max-width: 680px) {
      padding: 3rem 5rem 0;
   }
   @media (max-width: 500px) {
      padding: 3rem 2rem 0;
   }
`;

export const ProductList = styled.ul`
   padding-bottom: 1rem;
`;

export const ProductItem = styled.li`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 1.5rem;
`;

export const ProductItemLeft = styled.div`
   display: flex;
   align-items: center;
`;

export const Image = styled.div`
   position: relative;
   width: 6rem;
   height: 6rem;
`;

export const ImageBox = styled.div`
   box-shadow: 0 0 0 1px #d9d9d9;
   border-radius: 5px;
   width: 6rem;
   height: 6rem;
   overflow: hidden;
`;

export const Info = styled.div`
   margin-left: 1.5rem;
`;

export const Name = styled.p`
   color: #4b4b4b;
   text-transform: capitalize;
`;

export const Color = styled.p`
   margin-top: 0.5rem;
   font-size: 1.2rem;
   color: #969696;
   text-transform: capitalize;
`;

export const Amount = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   position: absolute;
   right: -10px;
   top: -10px;
   width: 2rem;
   height: 2rem;
   border-radius: 50%;
   background-color: #999999;
   color: #ffffff;
   z-index: 1;
`;

export const Price = styled.p`
   color: #4b4b4b;
`;

export const CodeForm = styled.form`
   ${FormRow} {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e1e1e1;
      border-top: 1px solid #e1e1e1;
      padding: 2rem 0;
   }
`;

export const Code = styled.div`
   width: 75%;
   display: inline-block;
   margin-right: 1rem;
`;

export const Fee = styled.div`
   padding: 2rem 0;
   color: #717171;
   border-top: 1px solid #e1e1e1;
   border-bottom: 1px solid #e1e1e1;
`;

export const FeeRow = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 1.5rem 0;
`;

export const Total = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin: 2.5rem 0;
`;

export const TotalTitle = styled.p`
   font-size: 1.6rem;
   color: #4b4b4b;
`;

export const TotalRow = styled.div`
   display: flex;
   align-items: center;
   color: #4b4b4b;
`;

export const TotalUnit = styled.p`
   font-size: 1.2rem;
   color: #717171;
   margin-right: 2rem;
`;

export const TotalPrice = styled.p`
   font-size: 2.4rem;
`;
