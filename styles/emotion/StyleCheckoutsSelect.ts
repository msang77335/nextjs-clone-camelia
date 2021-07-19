import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CaretDown } from "@emotion-icons/fa-solid";

type SelectProps = {
   isSelected?: boolean;
   isOpen?: boolean;
   isError?: boolean;
   isDisable?: boolean;
};

type OptionProps = {
   isChose?: boolean;
};

export const CaretDownIcon = styled(CaretDown)`
   width: 1.7rem;
   height: 1.7rem;
`;

export const Label = styled.label`
   cursor: pointer;
   position: absolute;
   left: 1rem;
   top: 1rem;
   color: #999999;
   transition: all 0.25s ease-in-out;
   background-color: #ffffff;
`;

export const SelectTag = styled.div`
   position: relative;
   z-index: 2;
   cursor: pointer;
   display: none;
   justify-content: space-between;
   align-items: center;
   select {
      cursor: pointer;
      width: 100%;
      padding: 0.85rem 1rem;
      border: none;
      border-radius: 5px;
      color: #666666;
      appearance: none;
      font-family: Arial, Helvetica, sans-serif;
      background-color: transparent;
   }
   ${CaretDownIcon} {
      position: absolute;
      right: 1rem;
   }
   ${Label} {
      z-index: -1;
   }
   @media (max-device-width: 768px) {
      display: flex;
   }
`;

export const OptionTag = styled.option`
   ${(props: OptionProps) =>
      props.isChose &&
      css`
         display: none;
      `}
`;

export const Selected = styled.div`
   height: 3.6rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
   padding: 0 1rem;
   p {
      width: 100%;
      padding: 0.9rem 0;
      position: relative;
      overflow: hidden;
      display: inline-block;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:before {
         position: absolute;
         content: "";
         width: 0.5px;
         height: 50%;
         right: 0.7rem;
         top: 50%;
         transform: translateY(-50%);
         background-color: #cccccc;
      }
   }
   @media (max-device-width: 768px) {
      display: none;
   }
`;

export const Error = styled.p`
   font-size: 1.2rem;
   color: #d61c1f;
   height: 0;
   opacity: 0;
   transition: all 0.25s linear;
   ${(props: SelectProps) =>
      props.isError &&
      css`
         margin-top: 0.5rem;
         height: 1.4rem;
         opacity: 1;
      `}
`;

export const Box = styled.div`
   position: relative;
   color: #999999;
   background-color: #ffff;
   box-shadow: 0 0 0 1px #d9d9d9;
   border-radius: 5px;
   transition: all 0.3s ease;
   @media (max-width: 414px) {
      margin-left: 0;
   }
`;

export const List = styled.ul`
   width: 100%;
   margin-top: 0.7rem;
   position: absolute;
   background-color: #ffff;
   box-shadow: 0 0 0 1px #d9d9d9;
   border-radius: 3px;
   opacity: 0;
   visibility: hidden;
   transition: all 0.3s ease;
   z-index: 10;
   max-height: 15rem;
   overflow-y: scroll;
   ::-webkit-scrollbar {
      width: 3.5px;
   }

   /* Track */
   ::-webkit-scrollbar-track {
      background: #fff;
      box-shadow: inset 0 0 3px rgb(0 0 0 / 30%);
      border-radius: 3px;
   }

   /* Handle */
   ::-webkit-scrollbar-thumb {
      background: #338dbc;
      border-radius: 3px;
   }

   /* Handle on hover */
   ::-webkit-scrollbar-thumb:hover {
      background: #338dbc;
   }
   @media (max-device-width: 768px) {
      display: none;
   }
`;

export const Item = styled.li`
   padding: 1rem;
   cursor: pointer;
   transition: all 0.25s ease;
   border-radius: 3px;
   &:hover {
      background-color: #dcdcdc;
   }
`;

export const Select = styled.div`
   color: #666666;
   ${(props: SelectProps) =>
      props.isOpen &&
      css`
         ${Box} {
            box-shadow: 0 0 0 2px #338dbc;
         }
         ${List} {
            opacity: 1;
            visibility: visible;
         }
      `}
   ${(props: SelectProps) =>
      props.isSelected &&
      css`
         ${Label} {
            left: 0.8rem;
            top: -0.9rem;
            font-size: 1.2rem;
            color: #338dbc;
         }
         ${Box} {
            box-shadow: 0 0 0 2px #338dbc;
         }
      `}
      ${(props: SelectProps) =>
      props.isError &&
      !props.isSelected &&
      !props.isOpen &&
      css`
         ${Box} {
            box-shadow: 0 0 0 2px #d61c1f;
         }
      `}
      ${(props: SelectProps) =>
      props.isDisable &&
      css`
         ${Selected} {
            cursor: no-drop;
         }
      `}
`;
