import styled from "@emotion/styled";
import Wrapper from "./StyleWrapper";
import Container from "./StyleContainer";

type LinkProps = {
   isActive?: boolean;
};

export const MenuWrapper = styled(Wrapper)`
   border-left: 1px solid #ccc;
   border-right: 1px solid #ccc;
   @media (max-width: 860px) {
      border-top: 1px solid #ccc;
   }
`;

export const MenuContainer = styled(Container)``;

export const List = styled.ul`
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 1rem 0;
`;

export const Link = styled.span`
   text-transform: uppercase;
   transition: all 0.25s linear;
   color: ${(props: LinkProps) =>
      props.isActive ? "rgb(214, 28, 31)" : "#000000"};
   &:hover {
      color: rgb(214, 28, 31);
   }
`;

export const Item = styled.li``;

export const Logo = styled.img`
   width: 15rem;
   @media (max-width: 620px) {
      width: 12rem;
   }
`;
