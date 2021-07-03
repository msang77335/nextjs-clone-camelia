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
   padding: 1rem;
   img {
      width: 2rem;
      height: 2rem;
   }
`;
