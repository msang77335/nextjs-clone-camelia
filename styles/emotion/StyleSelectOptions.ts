import styled from "@emotion/styled";
import { css } from "@emotion/react";

type SelectProps = {
   isOpen?: boolean;
};

export const Selected = styled.div`
   min-width: 17rem;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
   padding: 1rem;
`;

export const Box = styled.div`
   margin-left: 1rem;
   background-color: #ffff;
   border: 1px solid #ccc;
   border-radius: 5px;
   transition: all 0.3s ease;
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