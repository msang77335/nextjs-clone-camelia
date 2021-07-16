import styled from "@emotion/styled";

export const CountTitle = styled.p`
   font-weight: 700;
   margin-right: 1.5rem;
`;

export const CountBox = styled.div`
   display: flex;
   align-items: center;
   border-radius: 3px;
`;

export const CountInput = styled.input`
   text-align: center;
   color: rgb(102, 102, 102);
   font-size: 1.6rem;
   border: 1px solid #404040;
   padding: 0.5rem;
   height: 3rem;
   width: 10rem;
   background-color: transparent;
`;

export const CountBtn = styled.button`
   border: 1px solid #404040;
   width: 3rem;
   height: 3rem;
   background-color: transparent;
   &:hover {
      &:before,
      &:after {
         background-color: #d61c1f;
      }
   }
   &[disabled] {
      cursor: not-allowed;
   }
`;

export const CountPlus = styled(CountBtn)`
   border-left: none;
   border-top-right-radius: 2px;
   border-bottom-right-radius: 2px;
   position: relative;
   &:before,
   &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-color: rgb(102, 102, 102);
      transition: all 0.25s linear;
   }
   &:before {
      width: 1.3rem;
      height: 1px;
   }
   &:after {
      width: 1.5px;
      height: 1.3rem;
   }
`;

export const CountMinus = styled(CountBtn)`
   border-right: none;
   border-top-left-radius: 2px;
   border-bottom-left-radius: 2px;
   position: relative;
   &:before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 1.3rem;
      height: 1px;
      background-color: rgb(102, 102, 102);
   }
`;
export const Count = styled.div`
   display: flex;
   align-items: center;
`;
