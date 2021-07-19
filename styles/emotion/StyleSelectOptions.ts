import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { CaretDown } from "@emotion-icons/fa-solid";

type SelectProps = {
   isOpen?: boolean;
};

type OptionProps = {
   isChose?: boolean;
};

export const CaretDownIcon = styled(CaretDown)`
   width: 1.7rem;
   height: 1.7rem;
`;

export const Selected = styled.div`
   min-width: 17rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
   padding: 1rem;
   @media (max-device-width: 768px) {
      display: none;
   }
`;

export const Title = styled.p`
   @media (max-width: 500px) {
      display: none;
   }
`;

export const SelectTag = styled.div`
   position: relative;
   min-width: 17rem;
   cursor: pointer;
   display: none;
   justify-content: space-between;
   align-items: center;
   select {
      min-width: 17rem;
      border: none;
      border-radius: 5px;
      color: #666666;
      appearance: none;
      padding: 0.85rem 1rem;
      cursor: pointer;
   }
   ${CaretDownIcon} {
      position: absolute;
      right: 1rem;
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

export const Box = styled.div`
   margin-left: 1rem;
   background-color: #ffff;
   border: 1px solid #ccc;
   border-radius: 5px;
   transition: all 0.3s ease;
   @media (max-width: 414px) {
      margin-left: 0;
   }
`;

export const List = styled.ul`
   margin-top: 0.5rem;
   position: absolute;
   background-color: #ffff;
   border: 1px solid #ccc;
   border-radius: 5px;
   opacity: 0;
   visibility: hidden;
   transition: all 0.3s ease;
   z-index: 10;
   @media (max-device-width: 768px) {
      display: none;
   }
`;

export const Item = styled.li`
   min-width: 17rem;
   padding: 1rem;
   cursor: pointer;
   transition: all 0.25s ease;
   border-radius: 3px;
   &:hover {
      background-color: #dcdcdc;
   }
`;

export const Select = styled.div`
   display: flex;
   align-items: center;
   color: #666666;
   ${(props: SelectProps) =>
      props.isOpen &&
      css`
         ${Box} {
            border-color: rgb(214, 28, 31);
            box-shadow: 0 0 5px 0 #d61c1f;
         }
         ${List} {
            opacity: 1;
            visibility: visible;
         }
      `}
`;
