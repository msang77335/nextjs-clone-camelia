import styled from "@emotion/styled";
import Container from "./StyleContainer";

export const CheckoutsContainer = styled(Container)`
   font-family: Arial, Helvetica, sans-serif;
   padding: 5rem;
   width: 60%;
`;

export const Title = styled.h2`
   font-size: 2.8rem;
   a {
      color: #333333;
   }
`;

export const FormTitle = styled.p`
   font-size: 1.8rem;
`;

export const Form = styled.form``;

export const FormRow = styled.div`
   width: 100%;
`;

export const Input = styled.input`
   border: none;
   padding: 1rem;
   border-radius: 4px;
   box-shadow: 0 0 0 1px #d9d9d9;
   transition: all 0.2s ease-out;
   width: 100%;
   margin-top: 1rem;
   ::placeholder {
      font-family: Arial, Helvetica, sans-serif;
   }
`;

export const Email = styled.div`
   width: 66%;
`;

export const Phone = styled.div`
   width: 34%;
`;

export const Btn = styled.button``;
