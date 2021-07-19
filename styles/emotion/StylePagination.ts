import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { ChevronLeft, ChevronRight } from "@emotion-icons/fa-solid";

type PropsPagination = {
   isActive?: boolean;
   isDsable?: boolean;
};

export const ChevronLeftIcon = styled(ChevronLeft)`
   width: 1.2rem;
   height: 1.2rem;
   transition: all 0.25s linear;
`;

export const ChevronRightIcon = styled(ChevronRight)`
   width: 1.2rem;
   height: 1.2rem;
   transition: all 0.25s linear;
`;

export const List = styled.ul`
   display: flex;
   justify-content: center;
`;

export const Item = styled.li`
   cursor: pointer;
   width: 3rem;
   height: 3rem;
   display: flex;
   align-items: center;
   justify-content: center;
   border: 1px solid #545457;
   transition: all 0.25s linear;
   color: #545457;
   margin: 0 0.3rem;
   ${(props: PropsPagination) =>
      props.isActive &&
      css`
         background-color: #545457;
         color: #ffffff;
      `}
   ${(props: PropsPagination) =>
      props.isDsable &&
      css`
         cursor: no-drop;
      `}
   &:hover {
      background-color: #545457;
      color: #ffffff;
      ${(props: PropsPagination) =>
         props.isDsable &&
         css`
            background-color: transparent;
            ${ChevronLeftIcon} {
               color: #545457;
            }
            ${ChevronRightIcon} {
               color: #545457;
            }
         `}
   }
`;
