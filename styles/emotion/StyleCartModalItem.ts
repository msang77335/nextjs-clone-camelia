import styled from "@emotion/styled";

export const Item = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
   font-size: 1.2rem;
   border-bottom: 1px solid #f0ebeb;
`;

export const Left = styled.div`
   display: flex;
   align-items: center;
`;

export const Right = styled.div``;

export const Image = styled.div`
   width: 6.5rem;
   height: 6.5rem;
`;

export const InfoList = styled.ul`
   margin-left: 1.5rem;
`;

export const InfoItem = styled.li`
   margin: 1rem 0;
`;

export const Name = styled.p`
   font-weight: 700;
   color: #333333;
   transition: all 0.25s linear;
   &:hover {
      color: #d61c1f;
   }
`;

export const Color = styled.p`
   color: #666666;
`;

export const Quantity = styled.p`
   color: #666666;
`;

export const Price = styled.p`
   font-weight: 700;
   color: #d61c1f;
`;

export const BtnDel = styled.button`
   color: #d61c1f;
   background-color: transparent;
   border: none;
`;
