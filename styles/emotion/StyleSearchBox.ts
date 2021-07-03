import styled from "@emotion/styled";

export const Box = styled.div`
   display: flex;
`;

export const Input = styled.input`
   padding: 0.8rem 1rem;
   border: 1px solid #f0ebeb;
   border-radius: 3px;
   transition: all 0.15s linear;
   font-family: "Futura", sans-serif;
   width: 20rem;
   color: #666666;
   &::placeholder {
      font-family: "Futura", sans-serif;
   }
   &:focus {
      border: 1px solid #dacece;
   }
`;
export const Submit = styled.button`
   border: none;
   background-color: rgb(84, 84, 87);
   color: #ffff;
   border-radius: 3px;
   width: 4rem;
   height: 4rem;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all 0.25s linear;
   &:hover {
      background-color: #767679;
   }
`;
