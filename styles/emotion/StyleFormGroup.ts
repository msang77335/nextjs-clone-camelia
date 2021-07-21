import styled from "@emotion/styled";
import { css } from "@emotion/react";

type PropsFormGroup = {
   isError?: boolean;
};

export const Error = styled.p`
   font-size: 1.2rem;
   color: #d61c1f;
   transition: all 0.25s linear;
   height: 0;
   opacity: 0;
`;

export const Label = styled.label`
   position: absolute;
   left: 1rem;
   top: 1rem;
   color: #999999;
   transition: all 0.25s ease-in-out;
   background-color: #ffffff;
   cursor: auto;
`;

export const Input = styled.input`
   border: none;
   padding: 1rem;
   border-radius: 4px;
   box-shadow: 0 0 0 1px #d9d9d9;
   transition: all 0.25s ease-out;
   width: 100%;
   -webkit-appearance: none;
   ::placeholder {
      font-family: Arial, Helvetica, sans-serif;
   }
   &:focus {
      box-shadow: 0 0 0 2px #338dbc;
      ~ ${Label} {
         left: 0.8rem;
         top: -0.9rem;
         font-size: 1.2rem;
         color: #338dbc;
      }
   }
   &:not(:placeholder-shown)&:not(:focus) {
      box-shadow: 0 0 0 2px #338dbc;
      ~ ${Label} {
         left: 0.8rem;
         top: -0.9rem;
         font-size: 1.2rem;
         color: #338dbc;
      }
   }
`;

export const Group = styled.div`
   position: relative;
   ${(props: PropsFormGroup) =>
      props.isError &&
      css`
         ${Input} {
            box-shadow: 0 0 0 2px #d61c1f;
            &:focus {
               box-shadow: 0 0 0 2px #338dbc;
            }
         }
         ${Error} {
            margin-top: 0.5rem;
            height: 1.4rem;
            opacity: 1;
         }
      `}
`;
