import styled from "@emotion/styled";

export const Submit = styled.button`
   border: none;
   background-color: rgb(84, 84, 87);
   color: #ffff;
   border-radius: 3px;
   width: 3.8rem;
   height: 3.8rem;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all 0.25s linear;
   margin-left: 0.5rem;
`;

export const SearchForm = styled.form`
   display: flex;
`;

export const Result = styled.div`
   position: absolute;
   margin-top: 0.5rem;
   width: 100%;
   border: 1px solid #e2e2e2;
   border-radius: 4px;
   box-shadow: 0 1px 3px 0 #7d7d7d;
   background-color: #ffffff;
   transition: all 0.25s linear;
   z-index: 70;
`;

export const ResultList = styled.ul``;

export const ResultItem = styled.li`
   display: flex;
   align-items: center;
   border-bottom: 1px dotted #ccc;
   padding: 1rem;
   background-color: #ffffff;
   transition: all 0.25s linear;
   &:hover {
      background-color: #ededed;
   }
   &:last-of-type {
      border-bottom-color: transparent;
   }
`;

export const Input = styled.input`
   border-radius: 3px;
   transition: all 0.15s linear;
   font-family: "Futura", sans-serif;
   border: none;
   color: #666666;
   width: 20rem;
   padding: 0.8rem 1rem;
   border: 1px solid #f0ebeb;
   &::placeholder {
      font-family: "Futura", sans-serif;
   }
   &:focus {
      border: 1px solid rgb(84, 84, 87);
   }
`;

export const Image = styled.div`
   margin-right: 1rem;
`;

export const Info = styled.div`
   font-weight: 700;
`;

export const Name = styled.p`
   margin-bottom: 1rem;
   text-transform: capitalize;
   color: #333333;
`;

export const Price = styled.p`
   color: #d61c1f;
`;

export const Box = styled.div`
   position: relative;
`;

export const Text = styled.p`
   margin: 1.5rem 1rem;
   color: #666666;
`;

export const PriceUnit = styled.span`
   text-decoration: underline;
`;
