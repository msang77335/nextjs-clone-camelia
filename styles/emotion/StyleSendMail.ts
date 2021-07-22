import styled from "@emotion/styled";
import { PaperPlane } from "@emotion-icons/fa-solid";

export const PaperPlaneIcon = styled(PaperPlane)`
   width: 2rem;
   height: 2rem;
   color: #ffffff;
`;

export const Box = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 0.3rem 0.3rem 0.3rem 1rem;
   width: 65%;
   margin: 0 auto 2rem;
   background-color: #ffff;
   @media (max-width: 650px) {
      width: 100%;
   }
`;

export const Input = styled.input`
   width: 60%;
   border: none;
`;

export const Submit = styled.button`
   width: 3.5rem;
   height: 3.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   border: none;
   border-radius: 3px;
   background-color: #545457;
   transition: all 0.25s linear;
   &:hover {
      background-color: #d61c1f;
   }
`;
