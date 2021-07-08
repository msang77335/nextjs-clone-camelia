import styled from "@emotion/styled";

type ColorProps = {
   value?: string;
   isActive?: boolean;
};

export const Color = styled.div``;

export const ColorTitle = styled.p`
   font-weight: 700;
`;

export const ColorList = styled.ul`
   display: flex;
   padding: 1rem 0;
`;

export const ColorItem = styled.li``;

export const BtnColor = styled.button`
   width: 3rem;
   height: 3rem;
   margin: 0.5rem;
   border-radius: 50%;
   display: inline-block;
   border: none;
   box-shadow: 0px 0px 0px 1px transparent;
   border: 3px solid rgb(237, 237, 237);
   transition: all 0.35s linear;
   background-color: ${(props: ColorProps) => props.value};
   box-shadow: ${(props: ColorProps) =>
      props.isActive ? "0px 0px 0px 1px rgb(214, 28, 31)" : "transparent"};
`;

export const Actions = styled.div`
   margin-top: 2rem;
   display: flex;
   justify-content: space-between;
   @media (max-width: 1080px) {
      flex-wrap: wrap;
   }
`;

export const BtnActions = styled.button`
   padding: 1rem 2rem;
   width: calc(50% - 0.5rem);
   text-transform: uppercase;
   font-size: 1.6rem;
   border-radius: 4px;
   border: 1px solid #d61c1f;
   transition: all 0.35s ease-in-out;
   @media (max-width: 1080px) {
      width: 100%;
      margin-bottom: 1rem;
   }
   @media (max-width: 876px) {
      width: calc(50% - 0.5rem);
      margin-bottom: 0;
   }
   @media (max-width: 413px) {
      width: 100%;
      margin-bottom: 1rem;
   }
`;

export const BtnAddToCart = styled(BtnActions)`
   color: #d61c1f;
   background-color: #ffffff;
   &:hover {
      color: #ffffff;
      background-color: #d61c1f;
   }
`;

export const BtnBuy = styled(BtnActions)`
   background-color: #d61c1f;
   color: #ffffff;
   &:hover {
      color: #d61c1f;
      background-color: #ffffff;
   }
`;
