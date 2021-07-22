import styled from "@emotion/styled";
import Container from "./StyleContainer";
import { Search } from "@emotion-icons/fa-solid";
import ContentMain from "./StyleContentMain";

export const SearchIcon = styled(Search)`
   color: #ffffff;
   width: 2rem;
   height: 2rem;
`;

export const SearchPageContentMain = styled(ContentMain)`
   padding: 2rem 0;
`;

export const SearchPageContainer = styled(Container)``;

export const Top = styled.div`
   text-align: center;
`;

export const Title = styled.h2`
   text-transform: uppercase;
   font-size: 2.3rem;
   color: #333333;
`;

export const SearchWord = styled.h2`
   margin-top: 2rem;
   font-size: 2rem;
   color: #333333;
`;

export const KeyWord = styled.span`
   color: #d61c1f;
`;

export const SearchBox = styled.form`
   margin-top: 3.5rem;
   display: flex;
   justify-content: center;
   align-items: center;
   margin-bottom: 5rem;
   @media (max-width: 550px) {
      flex-direction: column;
   }
`;

export const FormGroup = styled.div`
   display: flex;
   align-items: center;
   @media (max-width: 550px) {
      margin-top: 1rem;
   }
`;

export const Input = styled.input`
   width: 45rem;
   padding: 0.8rem 1rem;
   border-radius: 3px;
   border: 1px solid #f0ebeb;
   transition: all 0.15s linear;
   font-family: "Futura", sans-serif;
   background: #ffffff;
   margin: 0 0.5rem;
   &::placeholder {
      font-family: "Futura", sans-serif;
   }
   @media (max-width: 700px) {
      width: 30rem;
   }
   @media (max-width: 600px) {
      width: 25rem;
   }
   @media (max-width: 550px) {
      width: 27rem;
   }
`;

export const Submit = styled.button`
   width: 3.7rem;
   height: 3.7rem;
   background-color: #545457;
   border: none;
   border-radius: 3px;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const List = styled.ul`
   display: flex;
   flex-wrap: wrap;
   align-items: center;
   margin-right: -1rem;
`;

export const Item = styled.li`
   width: calc(16.66% - 1rem);
   margin-right: 1rem;
   margin-top: 2rem;
   @media (max-width: 1280px) {
      width: calc(25% - 1rem);
   }
   @media (max-width: 860px) {
      width: calc(33.33% - 1rem);
   }
   @media (max-width: 768px) {
      width: calc(50% - 1rem);
   }
`;

export const Emtpy = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   min-height: 20rem;
`;

export const Text = styled.p`
   color: #666666;
   margin-left: 1.5rem;
   font-size: 1.8rem;
`;
