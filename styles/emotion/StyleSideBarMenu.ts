import styled from "@emotion/styled";

type LinkProps = {
   isActive?: boolean;
};

export const List = styled.ul`
   flex-direction: column;
`;

export const Item = styled.li``;
export const Link = styled.span`
   display: block;
   padding: 1rem;
   border-bottom: 1px solid #dcdbdb;
   color: ${(props: LinkProps) =>
      props.isActive ? "rgb(214, 28, 31)" : "#000000"};
   text-transform: uppercase;
   transition: all 0.25s linear;
   text-align: center;
   &:hover {
      color: rgb(214, 28, 31);
   }
`;
